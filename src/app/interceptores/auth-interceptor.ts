import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('in auth');
  const authService = inject(AuthService);

  let token = localStorage.getItem('token');

  if (authService.isTokenExpirado()) {
    token = localStorage.getItem('refreshToken')
  }

  if (token) {
    const reqClone = req.clone({
      headers: req.headers.set('Authorization', '`Bearer ' + token),
      withCredentials: true
    });

    return next(reqClone);
  }

  return next(req);
};
