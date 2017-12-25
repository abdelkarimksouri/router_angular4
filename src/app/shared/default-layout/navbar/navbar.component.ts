import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../services/shared.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit{
    /**
     * @param {TranslateService} translateService
     */
    constructor(private navService: NavService, private translateService: TranslateService) {
        this.item = false;
    }
    item: boolean;
    subscription: any;
    ngOnInit() {
      this.subscription = this.navService.getNavChangeEmitter()
        .subscribe(item => this.selectedNavItem(item));
    }
    selectedNavItem(item) {
      this.item = item;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    /**
     * Change app language
     *
     * @param {string} language
     */

    public onChangeLanguage(language: string): void {
        this.translateService.use(language);
    }
}

