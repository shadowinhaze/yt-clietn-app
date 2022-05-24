import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Path } from 'src/app/shared/constants/shared-constants';
import { addCustomItem } from 'src/app/store/actions/custom-item.action';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';

@Component({
  selector: 'yt-admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent {
  constructor(private store: Store, private router: Router) {}

  onNewItemFormSubmitAction(customCard: CustomItem): void {
    if (!customCard) return;
    this.store.dispatch(addCustomItem({ customItem: customCard }));
    this.router.navigate([Path.main]);
  }
}
