import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SweetAlertService } from 'angular-sweetalert-service';
import { EmpService } from '../../shared/services/emp.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {
  id: any;
  private sub: any;
  model: Employee;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private empService: EmpService,
      private alertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.model = new Employee();
  }
  addEmployee() {
    console.log(this.model);
      this.empService
        .addEmployee(this.model)
        .subscribe(() => this.goBack());
  }
   goBack() {
    this.router.navigate(['/']);
  }

}
