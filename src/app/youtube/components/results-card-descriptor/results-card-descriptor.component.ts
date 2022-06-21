import { Component, Input } from '@angular/core';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-results-card-descriptor',
  templateUrl: './results-card-descriptor.component.html',
  styleUrls: ['./results-card-descriptor.component.scss'],
})
export class ResultsCardDescriptorComponent {
  @Input() card: SearchItemShort | null = null;
}
