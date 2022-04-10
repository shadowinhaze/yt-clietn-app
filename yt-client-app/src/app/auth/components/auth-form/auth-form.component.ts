import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  LoginForm,
  LoginFromKeys,
  Paths,
} from 'src/app/shared/constants/shared-constants';

// Error Messages
import errors from '../../../../assets/error-message.json';

// Service
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'yt-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public isPassHidden = true;

  private loginForm = new FormGroup({
    [LoginForm.login]: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    [LoginForm.pass]: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {
    this.auth.authChange.subscribe((status) => {
      if (status) this.router.navigate([Paths.home, Paths.main]);
    });
  }

  get form(): FormGroup {
    return this.loginForm;
  }

  get login(): AbstractControl | null {
    return this.loginForm.get(LoginForm.login);
  }

  get pass(): AbstractControl | null {
    return this.loginForm.get(LoginForm.pass);
  }

  getErrorMessage(field: LoginFromKeys) {
    if (this[field]?.hasError('required')) {
      return errors[field].req;
    }

    if (this[field]?.hasError('minlength')) {
      return errors[field].length;
    }

    return errors[field].unknown;
  }

  logIn() {
    this.auth.user = this.loginForm.value.login;
    this.auth.logIn();
  }

  get isInvalid() {
    return this.loginForm.invalid;
  }
}
