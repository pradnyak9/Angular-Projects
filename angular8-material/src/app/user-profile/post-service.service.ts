import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Post } from '../user-profile/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient, public router: Router) { }

  createPost( postTitle, postContent, postAuther ) {
    return this.http.post(`/post/create`, { postTitle, postContent, postAuther } ).pipe(
      catchError(this.handleError)
    );
  }

  getPost() {
    return this.http.get<Post[]>(`/posts`);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    console.log('error');

    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
      errorMsg = error.error.message;
    } else {
      console.log('inside error');

      errorMsg = `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }
    // return an observable with a user-facing error message
    return throwError(errorMsg);
  }
  //
}
