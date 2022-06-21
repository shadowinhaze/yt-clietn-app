import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUIMessage, addCustomItem } from 'src/app/store';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { SUCCESS_UI_MESSAGE } from '../../constants/ui-message.constant';

@Component({
  selector: 'yt-admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent {
  constructor(private store: Store) {}

  onNewItemFormSubmitAction(customCard: CustomItem): void {
    if (!customCard) return;

    this.store.dispatch(addCustomItem({ customItem: customCard }));
    this.store.dispatch(setUIMessage({ uiMessage: SUCCESS_UI_MESSAGE }));
  }
}
