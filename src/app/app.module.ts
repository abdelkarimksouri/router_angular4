import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
import { TranslateLoaderFactory } from './config';
import { AuthGuardService } from './core/auth_guard.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { ShowproductComponent } from "./product/show/showproduct.component";
import {EditproductComponent } from './product/edit/editproduct.component';
import { AddemployeeComponent } from './product/add/addemployee.component';
import { SweetAlertService } from 'angular-sweetalert-service';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: TranslateLoaderFactory,
            deps: [Http]
        }
    }),
    AppRoutingModule,
    CoreModule,
    UserModule,
    SharedModule
    ],
    providers: [SweetAlertService, AuthGuardService ],

    declarations: [ AppComponent, HomeComponent, ShowproductComponent, EditproductComponent, AddemployeeComponent ],

  bootstrap: [AppComponent]
})
export class AppModule { }
