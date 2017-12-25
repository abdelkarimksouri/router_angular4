import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppConfig } from '../app/config';

/**
 * The main component
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    /**
     * @type {{position; lastOnBottom; timeOut} | any} the notification Options to configure app with
     */

    /**
     * @param {TranslateService} translate
     */
    constructor(private translate: TranslateService) {
    }

    /**
     * Init App configurations
     */
    ngOnInit() {
        const browserLang: string = this.translate.getBrowserLang();
        this.translate.addLangs(['en', 'fr']);
        this.translate.use('en');

    }
}
