import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const rolesGuard: CanMatchFn = (route, segments) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  if (token) {
    const rol = localStorage.getItem('rol');
    if (route.data?.['roles'] && route.data['roles'].indexOf(rol) === -1) {
      router.navigateByUrl('/');
    }

    return true;
  }

  router.navigateByUrl('/login');
  return false;
};
