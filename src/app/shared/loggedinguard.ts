import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('hana_auth_token')) {
      return true
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

export const authProvider = [LoggedInGuard];