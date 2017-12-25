import { FormControl, FormGroup, Validators } from '@angular/forms';

import {BaseForm} from '../../shared/form/base.form';
import {User} from "../../shared/models/user.model";

/**
 * The UserForm class
 */
export class RegisterFrom extends BaseForm {
    /**
     * @param {User} user
     */
    constructor(user?: User) {
        super(user);
    }

    /**
     * Init form validation restrictions
     */
    protected buildForm(): void {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
            password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)])

        });
    }
}
