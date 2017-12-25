// auth.service.ts

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public token: string;
  private redirectUrl = '/';

      constructor(private http: Http, private router: Router) {}
      createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
          btoa('username:password'));
      }

  /**
     * login the user
     *
     * @param credentials
     */
    login(credentials: any): Observable<boolean> {
      const url = 'http://localhost:8000/v1.0/login';
      const body = { username: credentials.username, password: credentials.password};
      let headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
      });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(url, body, options)
          .map((response: Response) => {

              // login successful if there's a jwt token in the response
              const token = response.json() && response.json().data.token;
              if (token) {
                  // set token property
                  this.token = token;
                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', this.token);

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }
          });
    }


    isAuthenticated(): boolean  {
      const token = localStorage.getItem('currentUser');
      if (token) {
        return true;
      } else {
        return false;
      }
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/user/login']);
    }

    createUserSession(data) {
      this.redirectUrl = '/';
  }
}