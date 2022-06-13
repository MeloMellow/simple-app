import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { notify } from '../swal-notification';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private router: Router, private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
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
        if (
          error.status == 401 &&
          !this.router.url.endsWith('/signin') &&
          !this.router.url.endsWith('/signup')
        ) {
          notify.unauthorized();
          this.userService.logout();
          this.router.navigateByUrl('/signin');
        }
        return throwError(() => error);
      })
    );
  }
}
