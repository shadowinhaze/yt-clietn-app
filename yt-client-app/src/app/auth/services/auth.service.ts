import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import {
  FAKE_AUTH_TOKEN,
  LocalStorageKeys,
  Path,
} from 'src/app/shared/constants/shared-constants';
import { clearCustomItems } from 'src/app/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user: string | null = null;

  public userChange: Subject<string | null> = new Subject<string | null>();

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private store: Store) {
    this.init();
  }

  get userLogin(): string | null {
    return this.user;
  }

  get isAuthorized(): boolean {
    return Boolean(this.user);
  }

  init(): void {
    const storedToken = LocalStorageService.getStoreItem(
      LocalStorageKeys.token
    );

    if (storedToken) {
      const name = LocalStorageService.getStoreItem(LocalStorageKeys.name);
      this.user = name;
      this.userChange.next(name);
    }

    this.subscription.add(
      this.userChange.subscribe((name) => {
        this.user = name;
        if (!name) this.router.navigate([Path.home, Path.auth]);
      })
    );
  }

  logIn(userName: string) {
    this.userChange.next(userName);
    LocalStorageService.setStoreItem(FAKE_AUTH_TOKEN, LocalStorageKeys.token);
    LocalStorageService.setStoreItem(userName, LocalStorageKeys.name);
  }

  logOut() {
    this.userChange.next(null);
    LocalStorageService.clearStoredItem(LocalStorageKeys.token);
    LocalStorageService.clearStoredItem(LocalStorageKeys.name);
    LocalStorageService.clearStoredItem(LocalStorageKeys.cards);
    this.store.dispatch(clearCustomItems());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
