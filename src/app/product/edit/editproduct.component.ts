import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SweetAlertService } from 'angular-sweetalert-service';
import swal from 'sweetalert2';
import { EmpService } from '../../shared/services/emp.service';
import { Employee } from '../employee';
import { ShowproductComponent } from '../show/showproduct.component';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  model: Employee;
  @ViewChild(ShowproductComponent) ShowproductComponent: ShowproductComponent;
  
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private empService: EmpService,
      private alertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.model = new Employee();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getSingleEmployee();
    });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getSingleEmployee() {

    this.empService
      .getEmployee(this.id)
      .subscribe(employee => {
        console.log(employee);
        this.model = employee[0];
      });
  }

  updateEmployee() {
      this.empService
        .updateEmployee(this.model)
        .subscribe(() => this.goBack());
  }
   goBack() {

    setTimeout((router: Router) => {
      this.router.navigate(['/']);
  }, 2000);
   }

   ngAfterupdateEmployee() {
    // After the view is initialized, this.userProfile will be available
    this.ShowproductComponent.getEmployees();

  }

}
