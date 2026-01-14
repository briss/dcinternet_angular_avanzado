import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Auth Guard: ", route, state);

  const token = localStorage.getItem('token');

  if (!token) {
    const router = inject(Router);
    router.navigateByUrl('/login');

    return false;
  }

  // true continúa, false ya no continúa
  return true;
};
