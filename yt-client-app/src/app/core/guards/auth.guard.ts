import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Paths } from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  private isAuthorized = false;

  constructor(private router: Router, private auth: AuthService) {
    this.isAuthorized = auth.isAuth;
    this.auth.authChange.subscribe((status) => {
      this.isAuthorized = status;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    switch (route.url[0].path) {
      case Paths.notFound:
        return this.isAuthorized || this.router.createUrlTree([Paths.auth]);
      case Paths.auth:
        return !this.isAuthorized || this.router.createUrlTree([Paths.home]);
      default:
        return (
          this.isAuthorized ||
          this.router.createUrlTree([Paths.home, Paths.auth])
        );
    }
  }

  canLoad(
    route: Route
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    switch (route.path) {
      case Paths.auth:
        return !this.isAuthorized || this.router.createUrlTree([Paths.home]);
      default:
        return (
          this.isAuthorized ||
          this.router.createUrlTree([Paths.home, Paths.auth])
        );
    }
  }
}
