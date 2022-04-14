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
import { Paths } from 'src/app/shared/constants/shared-constants';

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
      this.isAuthorized || this.router.createUrlTree([Paths.home, Paths.auth]);
    switch (path) {
      case Paths.notFound:
        return throwToAuth;
      case Paths.auth:
        return !this.isAuthorized || this.router.createUrlTree([Paths.home]);
      default:
        return throwToAuth;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
