import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  valForm: FormGroup;
  passwordForm: FormGroup;

  constructor(fb: FormBuilder) {

      let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
      let certainPassword = new FormControl('', CustomValidators.equalTo(password));

      this.passwordForm = fb.group({
          'password': password,
          'confirmPassword': certainPassword
      });

      this.valForm = fb.group({
          'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
          'accountagreed': [null, Validators.required],
          'passwordGroup': this.passwordForm
      });
  }

  submitForm($ev, value: any) {
      $ev.preventDefault();

      if (this.valForm.valid) {
          console.log('Valid!');
          console.log(value);
      }
  }


  ngOnInit() {
  }

}
