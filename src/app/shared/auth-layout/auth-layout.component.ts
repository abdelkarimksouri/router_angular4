import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {

  /**
     * @param {TranslateService} translateService
     */
    constructor(private translateService: TranslateService) {
    }


}
