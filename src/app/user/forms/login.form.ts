import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { BaseForm } from '../../shared/form/base.form';
import { Credentials } from '../../shared/models/credentials.model';

/**
 * The LoginForm class
 */
export class LoginForm extends BaseForm {

    /**
     * @param {Credentials} credentials
     */
    constructor(credentials?: Credentials) {
        super(credentials);
    }
    /**
     * Init form validation restrictions
     */
    protected buildForm(): void {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
            password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)])
        });
    }
}
