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
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

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
        if (error.status === 401 && !this.router.url.endsWith('/login')) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must be logged in to access this feature',
            buttonsStyling: false,
            confirmButtonText: 'Retry',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
          });
          this.authService.logout();
          this.router.navigateByUrl('/login');
        } else if (error.status === 401 && this.router.url.endsWith('/login')) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with your credentials!',
            buttonsStyling: false,
            confirmButtonText: 'Retry',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
          });
        }
        return throwError(() => error);
      })
    );
  }
}
