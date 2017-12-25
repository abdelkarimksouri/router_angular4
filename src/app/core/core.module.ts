import { HttpModule } from '@angular/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';


import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthService } from './services/auth.service';
@NgModule({
    imports: [
        RouterModule,
        HttpModule
    ],
    exports: [],
    declarations: [],
    providers: [ AuthService ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
