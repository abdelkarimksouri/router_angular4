import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { lowerFirst, upperFirst } from 'lodash';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
/**
 * The BaseForm class to be inherited from when wanting to validate and handle input events
 */
export abstract class BaseForm {
    /**
     * The current form
     */
    form: FormGroup;

    /**
     * The current error messages
     */
    errorMessages: { [key: string]: string };

    /**
     * @type {{}} validationMessages
     */
    protected validationMessages: { [key: string]: { [key: string]: string } } = {};

    /**
     * The form class prefix
     */
    private prefix: string;

    /**
     * @type {boolean} isSubmitted
     */
    private isSubmitted = false;

    /**
     * @param {Object} object
     */
    constructor(object?: object) {
        this.setPrefix();
        this.buildForm(object);
        this.setValidationMessages();
        this.mapValues(object);
        this.mapEvents();
    }

    /**
     * Check if for is valid
     *
     * @returns {boolean}
     */
    get valid(): boolean {
        return this.form.valid;
    }

    /**
     * Get form value as object
     *
     * @returns {Object}
     */
    get value(): object {
        return this.form.value;
    }

    /**
     * Force validation messages to process
     */
    submitted(): void {
        this.form.updateValueAndValidity();
        this.isSubmitted = true;
    }

    protected setPrefix(): void {
        if (this.constructor.name.substr(-4) === 'Form') {
            this.prefix = lowerFirst(this.constructor.name.slice(0, -4));
        } else {
            this.prefix = lowerFirst(this.constructor.name);
        }
    }

    /**
     * @param {Object} object
     */
    protected abstract buildForm(object?: object): void;

    protected setValidationMessages(): void {
    }

    /**
     * @param {Object} object
     */
    protected mapValues(object?: object): void {
        if (object) {
            this.form.patchValue(object);
        }
    }

    /**
     * Map events to form fields
     */
    private mapEvents() {
        this.form.valueChanges.debounceTime(1000).subscribe((value) => {
                this.errorMessages = this.processMessages(this.form);
            }
        );

        for (let key in this.form.controls) {
            if (key) {
                let onChangeMethod = `on${upperFirst(key)}}Change`;
                if (typeof this[onChangeMethod] === 'function') {
                    this.form.get(key).valueChanges.subscribe((value) => this[onChangeMethod](value));
                }
            }
        }
    }

    /**
     * Creates error messages
     *
     * @param {FormGroup} container
     * @returns {{[p: string]: string}}
     */
    private processMessages(container: FormGroup): { [key: string]: string } {
        let messages = {};
        for (let controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                let c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof FormGroup) {
                    let childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    messages[controlKey] = '';
                    if ((this.isSubmitted || c.dirty || c.touched) && c.errors) {
                        Object.keys(c.errors).map(messageKey => {
                            if (this.validationMessages[controlKey] && this.validationMessages[controlKey][messageKey]) {
                                messages[controlKey] = this.validationMessages[controlKey][messageKey] + ' ';
                            } else {
                                messages[controlKey] = `${this.prefix}.${controlKey}.validations.${messageKey} `;
                            }
                        });
                    }
                }
            }
        }
        return messages;
    }
}
