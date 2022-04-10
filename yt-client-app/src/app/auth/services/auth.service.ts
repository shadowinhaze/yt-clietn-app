import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FAKE_AUTH_TOKEN } from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatus = false;

  public authChange: Subject<boolean> = new Subject<boolean>();

  private userLogin: string = '';

  constructor() {
    this.init();
  }

  get status() {
    return this.authStatus;
  }

  get user() {
    return this.userLogin;
  }

  set user(value: string) {
    this.userLogin = value;
  }

  init() {
    if (localStorage['authToken']) {
      this.authStatus = true;
      this.authChange.next(localStorage['authToken']);
      this.userLogin = localStorage['userName'];
    }

    this.authChange.subscribe((status) => {
      this.authStatus = status;
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
