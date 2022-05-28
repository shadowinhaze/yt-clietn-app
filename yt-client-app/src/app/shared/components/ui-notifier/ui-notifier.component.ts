import { Component, OnDestroy } from '@angular/core';
import {
  MatSnackBarRef,
  TextOnlySnackBar,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectUIMessageFull, clearUIMessage } from 'src/app/store';
import { DefaultUINotifierProperty } from '../../constants/shared-ui-notifier.constants';

@Component({
  selector: 'yt-ui-notifier',
  template: '',
  styleUrls: ['./ui-notifier.component.scss'],
})
export class UiNotifierComponent implements OnDestroy {
  private uiMessage$ = this.store.select(selectUIMessageFull);

  private subscription = new Subscription();

  private ref!: MatSnackBarRef<TextOnlySnackBar>;

  constructor(private msb: MatSnackBar, private store: Store) {
    this.subscription.add(
      this.uiMessage$.subscribe((msg) => {
        const { message, type } = msg;

        if (message.length > 0) {
          this.ref = this.msb.open(
            message,
            DefaultUINotifierProperty.defaultButtonText,
            {
              duration: 100000,
              panelClass: [
                `${DefaultUINotifierProperty.defaultPanelClass}_type_${type}`,
              ],
            }
          );

          this.ref.afterDismissed().subscribe(() => {
            this.store.dispatch(clearUIMessage());
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
