import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'yt-results-card-descriptor',
  templateUrl: './results-card-descriptor.component.html',
  styleUrls: ['./results-card-descriptor.component.scss'],
})
export class ResultsCardDescriptorComponent {
  @Input() card: SearchItem | null = null;
}
