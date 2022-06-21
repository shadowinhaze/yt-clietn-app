import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ERROR_MESSAGES,
  LoginForm,
  LoginFromKeys,
} from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Output() formSubmit = new EventEmitter<string>();

  public isPassHidden = true;

  public loginForm = new FormGroup({
    [LoginForm.login]: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    [LoginForm.pass]: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get login(): AbstractControl | null {
    return this.loginForm.get(LoginForm.login);
  }

  get pass(): AbstractControl | null {
    return this.loginForm.get(LoginForm.pass);
  }

  getErrorMessageText(field: LoginFromKeys) {
    if (this[field]?.hasError('required')) {
      return ERROR_MESSAGES[field].req;
    }

    if (this[field]?.hasError('minlength')) {
      return ERROR_MESSAGES[field].length;
    }

    return ERROR_MESSAGES[field].unknown;
  }

  logIn() {
    this.formSubmit.emit(this.loginForm.value.login);
  }
}
