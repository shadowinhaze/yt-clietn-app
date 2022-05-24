import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlTree,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Path } from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate, OnDestroy {
  private isAuthorized: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private auth: AuthService) {
    this.isAuthorized = auth.isAuthorized;
    this.subscription.add(
      this.auth.userChange.subscribe(() => {
        this.isAuthorized = auth.isAuthorized;
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.handleRoute(route.url[0].path);
  }

  canLoad(route: Route): boolean | UrlTree {
    return this.handleRoute(route.path);
  }

  handleRoute(path: string | undefined) {
    const throwToAuth =
      this.isAuthorized || this.router.createUrlTree([Path.home, Path.auth]);
    switch (path) {
      case Path.notFound:
        return throwToAuth;
      case Path.auth:
        return !this.isAuthorized || this.router.createUrlTree([Path.home]);
      default:
        return throwToAuth;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
