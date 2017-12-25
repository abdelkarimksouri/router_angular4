import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent, DefaultLayoutComponent } from '../shared';
import {
    LoginComponent,
    RegisterComponent
} from './';

const UserRoutes: Routes = [
    {
        path: 'user',
        component: AuthLayoutComponent,
        children: [
            {path: 'login', component: LoginComponent}
        ]
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {path: 'registration', component: RegisterComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(UserRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule {
}

