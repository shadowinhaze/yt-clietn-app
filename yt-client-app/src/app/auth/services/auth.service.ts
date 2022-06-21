import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import {
  FAKE_AUTH_TOKEN,
  LocalStorageKeys,
  Paths,
} from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user: string | null = null;

  public userChange: Subject<string | null> = new Subject<string | null>();

  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {
    this.init();
  }

  get userLogin(): string | null {
    return this.user;
  }

  get isAuthorized(): boolean {
    return Boolean(this.user);
  }

  init(): void {
    if (localStorage[LocalStorageKeys.token]) {
      const name = localStorage[LocalStorageKeys.name];
      this.user = name;
      this.userChange.next(name);
    }

    this.subscription.add(
      this.userChange.subscribe((name) => {
        this.user = name;
        if (!name) this.router.navigate([Paths.home, Paths.auth]);
      })
    );
  }

  logIn(userName: string) {
    this.userChange.next(userName);
    localStorage.setItem(LocalStorageKeys.token, FAKE_AUTH_TOKEN);
    localStorage.setItem(LocalStorageKeys.name, userName);
  }

  logOut() {
    this.userChange.next(null);
    localStorage.removeItem(LocalStorageKeys.token);
    localStorage.removeItem(LocalStorageKeys.name);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
