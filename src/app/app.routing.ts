import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService as AuthGuard } from './core/auth_guard.service';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './shared/default-layout/default-layout.component';
import {ShowproductComponent } from './product/show/showproduct.component';
import {EditproductComponent } from './product/edit/editproduct.component';
import { AddemployeeComponent } from './product/add/addemployee.component';

const appRoutes: Routes = [

    // otherwise redirect to home
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: '',
        component: DefaultLayoutComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'addemployee', component: AddemployeeComponent, canActivate: [AuthGuard]},
            {path: 'showproduct',
            component: ShowproductComponent,
            canActivate: [AuthGuard],
                children: [
                    {path: '' , component: HomeComponent},
                    {path: 'edit/:id', component: EditproductComponent},
                ]
            }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {enableTracing: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

