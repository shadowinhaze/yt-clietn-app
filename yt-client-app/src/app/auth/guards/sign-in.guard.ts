import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Paths } from 'src/app/shared/constants/shared-constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanLoad {
  private isAuthorized = false;

  constructor(private router: Router, private auth: AuthService) {
    this.isAuthorized = auth.status;
    this.auth.authChange.subscribe((status) => {
      this.isAuthorized = status;
    });
  }

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !this.isAuthorized || this.router.createUrlTree([Paths.home]);
  }
}
