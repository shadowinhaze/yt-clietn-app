import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ERROR_MESSAGES,
  NewItemForm,
  FORMS_PATTERNS,
  NewItemFormFields,
  FormsErrorsKeys,
  NewItemFormLimits,
} from 'src/app/shared/constants/shared-forms-constants';

@Component({
  selector: 'yt-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss'],
})
export class NewItemFormComponent {
  readonly Fields: NewItemFormCollection = NewItemFormFields;

  readonly minDate = new Date();

  public newItemForm = new FormGroup({
    [NewItemForm.title]: new FormControl('', [
      Validators.required,
      Validators.minLength(NewItemFormLimits.titleMinLen),
      Validators.maxLength(NewItemFormLimits.titleMaxLen),
    ]),
    [NewItemForm.descr]: new FormControl('', [
      Validators.maxLength(NewItemFormLimits.descrMaxLen),
    ]),
    [NewItemForm.img]: new FormControl('', [
      Validators.required,
      Validators.pattern(FORMS_PATTERNS.url),
    ]),
    [NewItemForm.vid]: new FormControl('', [
      Validators.required,
      Validators.pattern(FORMS_PATTERNS.url),
    ]),
  });

  getFormPart(part: NewItemFormKeys): AbstractControl | null {
    return this.newItemForm.get(part);
  }

  getErrorMessageText(field: NewItemFormKeys) {
    if (this.getFormPart(field)?.hasError(FormsErrorsKeys.req)) {
      return ERROR_MESSAGES[field].req;
    }

    if (this.getFormPart(field)?.hasError(FormsErrorsKeys.minLen)) {
      return ERROR_MESSAGES[field].minlength;
    }

    if (this.getFormPart(field)?.hasError(FormsErrorsKeys.maxLen)) {
      return ERROR_MESSAGES[field].maxlength;
    }

    if (this.getFormPart(field)?.hasError(FormsErrorsKeys.pattern)) {
      return ERROR_MESSAGES[field].pattern;
    }

    return 'unknown error';
  }
}
