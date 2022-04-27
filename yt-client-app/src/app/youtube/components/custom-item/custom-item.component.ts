import { Component, Input } from '@angular/core';
import { Paths } from 'src/app/shared/constants/shared-constants';
import { CustomItem } from '../../models/custom-item.model';

@Component({
  selector: 'yt-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent {
  @Input() card!: CustomItem;

  get id() {
    return `${Paths.video}/${this.card.id}`;
  }
}
