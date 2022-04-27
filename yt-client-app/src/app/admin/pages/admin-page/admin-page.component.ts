import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomItem } from 'src/app/store/actions/custom-item.action';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';

@Component({
  selector: 'yt-admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent {
  constructor(private store: Store) {}

  onNewItemFormSubmitAction(customCard: CustomItem): void {
    if (!customCard) return;
    this.store.dispatch(addCustomItem({ customItem: customCard }));
  }
}
