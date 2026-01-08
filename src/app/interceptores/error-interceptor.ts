import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Err Interceptor');
  return next(req)
      .pipe(catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          console.log("Error del cliente: " + error.error.message);
        } else {
          console.log("Error del servidor: " + error.status + " - " + error.message);
        }
        return throwError(() => {error});
      }));
};
