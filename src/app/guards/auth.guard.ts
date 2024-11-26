import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (!isLoggedIn) {
    // Redirigir a login si no está logeado
    window.location.href = '/login';
    return false;
  }

  return true;
};
