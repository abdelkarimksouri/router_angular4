
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NavBarComponent } from './default-layout/navbar/navbar.component';
import { MenuComponent } from './default-layout/menu/menu.component';
import { FooterComponent } from './default-layout/footer/footer.component';
import { NavService } from './services/shared.service';
import { EmpService } from './services/emp.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
],
exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
],
providers: [NavService, EmpService],
  declarations: [AuthLayoutComponent, DefaultLayoutComponent, NavBarComponent, MenuComponent, FooterComponent]
})
export class SharedModule { }
