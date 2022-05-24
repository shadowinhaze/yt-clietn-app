import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  @Input() public isAuthorized: boolean = false;

  @Input() public userLogin: string | null = null;

  @Output() readonly logOut = new EventEmitter();

  pathToAdmin = `/${Path.admin}`;

  onLogOut() {
    this.logOut.emit();
  }

  get loginFirstLetter() {
    if (this.userLogin) return this.userLogin[0].toUpperCase();
    return null;
  }

  goToSignIn() {
    this.router.navigate([Path.home, Path.auth, Path.signIn]);
  }
}
