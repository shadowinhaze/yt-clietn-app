import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Paths } from 'src/app/shared/constants/shared-constants';
import { CustomItem } from '../../models/custom-item.model';

@Component({
  selector: 'yt-custom-item-more',
  templateUrl: './custom-item-more.component.html',
  styleUrls: ['./custom-item-more.component.scss'],
})
export class CustomItemMoreComponent {
  readonly backLink = `/${Paths.main}`;

  @Input() public card: Observable<CustomItem> | null = null;
}
