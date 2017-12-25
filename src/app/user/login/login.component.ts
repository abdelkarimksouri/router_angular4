import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
payload = '';
constructor(private router: Router, private authService: AuthService, fb: FormBuilder) {


          this.valForm = fb.group({
            'username': [null, Validators.compose([Validators.required])],
            'password': [null, Validators.required]
        });
      }

      submitForm($ev, value: any) {
        $ev.preventDefault();
        console.log(this.valForm.value);
           // console.log(this.valForm.value);
            this.authService.login(this.valForm.value).subscribe(res => (
              this.router.navigate(['/'])
              ) );
    }



      ngOnInit() {
        // reset login status
    }

}

