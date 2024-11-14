import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem("jwt") || "";
  const router = inject(Router);

  const loginService = inject(LoginService)
  if(token!=""){
    return loginService.validateToken(token).pipe(
      map(()=>true),
      catchError(error => {
        router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
  else{
    router.navigateByUrl("");
    return false;
  }
};
