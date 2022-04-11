import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FAKE_AUTH_TOKEN } from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized = false;

  public authChange: Subject<boolean> = new Subject<boolean>();

  private user: string = '';

  constructor() {
    this.init();
  }

  get isAuth() {
    return this.isAuthorized;
  }

  get userLogin() {
    return this.user;
  }

  set userLogin(value: string) {
    this.user = value;
  }

  init() {
    if (localStorage['authToken']) {
      this.isAuthorized = true;
      this.authChange.next(localStorage['authToken']);
      this.userLogin = localStorage['userName'];
    }

    this.authChange.subscribe((status) => {
      this.isAuthorized = status;
    });
  }

  logIn() {
    this.authChange.next(true);
    localStorage.setItem('authToken', FAKE_AUTH_TOKEN);
    localStorage.setItem('userName', this.userLogin);
  }

  logOut() {
    this.authChange.next(false);
    this.userLogin = '';
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
  }
}
