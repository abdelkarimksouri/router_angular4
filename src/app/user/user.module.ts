import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { UserRoutingModule } from '../user';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class UserModule { }
