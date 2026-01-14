import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { ServicioSuscripcion } from '../services/servicio-suscripcion';

export const vipGuard: CanMatchFn = (route, segments) => {
  console.log("VIP Guard: ", route, segments);

  let service = inject(ServicioSuscripcion);

  if (!service.isVip()) {
    const router = inject(Router);
    router.navigateByUrl('/busqueda');

    return false;
  }

  return true;
};
