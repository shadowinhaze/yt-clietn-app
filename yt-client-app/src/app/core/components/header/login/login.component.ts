import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  @Input() params: AuthStatus = {
    isLoggedIn: false,
    userName: '',
    isHeaderActionsDisabled: true,
  };

  @Output() logOut = new EventEmitter();

  onLogOut() {
    this.logOut.emit();
  }

  goToSignIn() {
    this.router.navigate(['/', 'auth', 'sign-in']);
  }
}
