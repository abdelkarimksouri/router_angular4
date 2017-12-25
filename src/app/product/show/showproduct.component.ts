import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmpService } from '../../shared/services/emp.service';
import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { SweetAlertService } from 'angular-sweetalert-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit, OnDestroy {

private sub: any;
id: any;
model: Employee;
  constructor(
      private _empService: EmpService,
      private router: Router,
      private route: ActivatedRoute,
      private alertService: SweetAlertService
  ) {}

  employees: any;
  ngOnInit() {
    this.model = new Employee();
    this.getEmployees();
    this.sub = this.route.firstChild.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  getEmployees() {
    this._empService.getEmployees().subscribe(result => {
      this.employees = result;
    });
  }
  onclick(id) {
      this.router.navigate(['/showproduct/edit', id]);
  }
  deleteEmployee(id) {
    swal({
      title: 'Are you sure to delete?',
      text: 'This record will be deleted from DataBase',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {
        console.log(id);
        if (+id === +this.id) {
          this.router.navigate(['/showproduct']);
        }
        this._empService. deleteEmployee(id).subscribe(res => {
          this.getEmployees();
          swal(
            'Deleted!',
            'Your record ligne has been deleted.',
            'success'
          );
        });

      // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      } else if (result.dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your record Ligne is safe :)',
          'error'
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
