import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { notify } from '../swal-notification';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private router: Router, private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    notify.loading();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is a client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is a server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        if (error.status == 0) {
          notify.noResponse();
        } else if (error.status == 500) {
          notify.serverError();
        } else if (error.status == 400) {
          notify.commonHttpError();
        } else if (error.status == 409) {
          notify.conflictCredentials();
        } else if (error.status == 403) {
          notify.forbidden();
        } else if (
          error.status == 401 &&
          !this.router.url.endsWith('/signin') &&
          !this.router.url.endsWith('/signup')
        ) {
          this.userService.logout();
          this.router.navigateByUrl('/signin');
          notify.unauthorized();
        } else if (error.status == 401) {
          notify.wrongCredentials();
        }
        return throwError(() => error);
      }),
      finalize(() => {
        notify.unLoad();
      })
    );
  }
}
