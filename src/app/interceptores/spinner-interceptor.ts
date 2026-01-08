import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServicioSpinner } from '../services/servicio-spinner';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {

  let spinnerService = inject(ServicioSpinner);
  spinnerService.incrementar();

  return next(req)
      .pipe(finalize(() => spinnerService.decrementar()));
};
