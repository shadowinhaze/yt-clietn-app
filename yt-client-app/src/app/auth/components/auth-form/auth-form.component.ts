import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ERROR_MESSAGES,
  FormsErrorsKeys,
  FORMS_PATTERNS,
  LoginForm,
  LoginFormLimits,
} from 'src/app/shared/constants/shared-forms-constants';

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
      Validators.email,
    ]),
    [LoginForm.pass]: new FormControl('', [
      Validators.required,
      Validators.minLength(LoginFormLimits.passMinLen),
      Validators.pattern(FORMS_PATTERNS.digit),
      Validators.pattern(FORMS_PATTERNS.lowerCase),
      Validators.pattern(FORMS_PATTERNS.upperCase),
      Validators.pattern(FORMS_PATTERNS.symbol),
    ]),
  });

  get login(): AbstractControl | null {
    return this.loginForm.get(LoginForm.login);
  }

  get pass(): AbstractControl | null {
    return this.loginForm.get(LoginForm.pass);
  }

  getErrorMessageText(field: LoginFormKeys) {
    if (this[field]?.hasError(FormsErrorsKeys.req)) {
      return ERROR_MESSAGES[field].req;
    }

    if (this[LoginForm.login]?.hasError(FormsErrorsKeys.mail)) {
      return ERROR_MESSAGES[field].unknown;
    }

    if (this[LoginForm.pass]?.hasError(FormsErrorsKeys.minLen)) {
      return ERROR_MESSAGES[LoginForm.pass].length;
    }

    if (this[LoginForm.pass]?.hasError(FormsErrorsKeys.pattern)) {
      const { base, digit, upperCase, lowerCase, symbol } =
        ERROR_MESSAGES[LoginForm.pass].weak!;

      switch (this.pass?.errors?.[FormsErrorsKeys.pattern].requiredPattern) {
        case FORMS_PATTERNS.digit.toString():
          return `${base}: ${digit}`;
        case FORMS_PATTERNS.upperCase.toString():
          return `${base}: ${upperCase}`;
        case FORMS_PATTERNS.symbol.toString():
          return `${base}: ${symbol}`;
        case FORMS_PATTERNS.lowerCase.toString():
          return `${base}: ${lowerCase}`;
        default:
          return 'Something went wrang';
      }
    }

    return ERROR_MESSAGES[field].unknown;
  }

  logIn() {
    this.formSubmit.emit(this.loginForm.value.login);
  }
}
