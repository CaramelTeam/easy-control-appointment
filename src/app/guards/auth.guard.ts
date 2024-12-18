import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const isLoggedIn = localStorage.getItem('token') !== null;

  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  const target = cookies.find(cookie => cookie.startsWith(`$loginUser=`));

  if (!target) {
    window.location.href = '/login';
    return false;
  }

  return true;
};
