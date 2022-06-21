import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ERROR_MESSAGES,
  NewItemForm,
  FORMS_PATTERNS,
  NewItemFormFields,
  FormsErrorsKeys,
  NewItemFormLimits,
} from 'src/app/shared/constants/shared-forms-constants';
import {
  NewItemFormCollection,
  NewItemFormKeys,
} from 'src/app/shared/types/shared';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { v4 } from 'uuid';

@Component({
  selector: 'yt-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss'],
})
export class NewItemFormComponent {
  @Output() formSubmit = new EventEmitter<CustomItem>();

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
      Validators.pattern(FORMS_PATTERNS.img),
    ]),
    [NewItemForm.video]: new FormControl('', [
      Validators.required,
      Validators.pattern(FORMS_PATTERNS.video),
    ]),
    [NewItemForm.date]: new FormControl(new Date()),
  });

  getErrorMessageText(field: NewItemFormKeys) {
    const hasError = (key: FormsErrorsKeys) =>
      this.newItemForm.get(field)?.hasError(key);

    if (hasError(FormsErrorsKeys.req)) {
      return ERROR_MESSAGES[field].req;
    }

    if (hasError(FormsErrorsKeys.minLen)) {
      return ERROR_MESSAGES[field].minlength;
    }

    if (hasError(FormsErrorsKeys.maxLen)) {
      return ERROR_MESSAGES[field].maxlength;
    }

    if (hasError(FormsErrorsKeys.pattern)) {
      return ERROR_MESSAGES[field].pattern;
    }

    return 'unknown error';
  }

  newItemFormSubmit() {
    const newCard = {
      id: v4(),
      title: this.newItemForm.value[NewItemForm.title],
      description: this.newItemForm.value[NewItemForm.descr],
      imageLink: this.newItemForm.value[NewItemForm.img],
      videoLink: this.newItemForm.value[NewItemForm.video],
      creationDate: this.newItemForm.value[NewItemForm.date],
    };

    this.formSubmit.emit(newCard);

    this.newItemForm.reset();
  }
}
