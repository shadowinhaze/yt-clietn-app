import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
// import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  private isLoggedIn = false;

  constructor(private router: Router, private auth: AuthService) {
    this.isLoggedIn = auth.status;
    this.auth.authChange.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn || this.router.createUrlTree(['/', 'auth']);
  }
}
