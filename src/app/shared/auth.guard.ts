import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  return authService.isAdmin().then((isAdmin) => {
    if (isAdmin) {
      console.log('User is admin, access granted');
      return true;
    } else {
      console.log('User is not admin, access denied');
      router.navigate(['/home']);
      return false;
    }
  });

};
