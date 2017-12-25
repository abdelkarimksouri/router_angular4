import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  employees= [];
  constructor(private _http: Http) { }
  checkMe: any;
  getEmployees() {
    return this._http.get("http://localhost/rapid_api/select.php/")
      .map(res => {
        this.checkMe = res;

        if (this.checkMe._body !== "0") {
           return res.json();
        }

      });
  }
  addEmployee(InsertInfo) {
    return this._http.post("http://localhost/rapid_api/insert.php", InsertInfo)
      .map(() => "");
  }
  getEmployee(id) {
    return this._http.post("http://localhost/rapid_api/selectone.php/", {'id': id})
      .map(res => res.json());
  }
  deleteEmployee(id) {
    return this._http.post("http://localhost/rapid_api/delete.php/",{'id':id})
      .map(() => this.getEmployees());
  }
  updateEmployee(info) {
    return this._http.post("http://localhost/rapid_api/update.php/", info)
      .map(() => "");
  }
}