import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/shared.service';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  item = false;
  constructor(private navService: NavService, private authservice: AuthService) {}
  selectedNavItem() {
    this.item = !this.item;
    this.navService.emitNavChangeEvent(this.item);
  }
  ngOnInit() {
  }

  logout() {
    this.authservice.logout();
  }

}
