import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Err Interceptor');
  let authService = inject(AuthService);

  return next(req)
      .pipe(catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          console.log("Error del cliente: " + error.error.message);
        } else {
          console.log("Error del servidor: " + error.status + " - " + error.message);

          if (error.status === 403) {
            if (confirm('¿Deseas continuar la sesión?')) {
              authService.isTokenExpirado.set(true);
            }
          }
        }
        return throwError(() => {error});
      }));
};
