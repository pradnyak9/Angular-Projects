import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../../../../Github Workspace/Angular-Projects/angular8-material/src/app/shared/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = {};

  constructor( private http: HttpClient, public router: Router ) { }

  // Login Service
  login(loginuser: any) {
    return this.http.post<any>(`/users/authenticate`, { email: loginuser.email, password: loginuser.password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: User) {
    console.log(user);
    return this.http.post(`/users/register`, user).pipe(
       catchError(this.handleError)
    );
  }

  // handles error
  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    console.log('error');

    if (error.error instanceof ErrorEvent) {

      errorMsg = error.error.message;
    } else {
      console.log('inside error');

      errorMsg = `Backend returned code ${error.status}, ` +
         `body was: ${error.error}`;
    }
    return throwError(errorMsg);
  }

}






