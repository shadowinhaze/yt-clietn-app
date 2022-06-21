import { Component, Input } from '@angular/core';
import { Paths } from 'src/app/shared/constants/shared-constants';
import { SearchItemShort } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'yt-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})
export class SearchResultsItemComponent {
  @Input() card!: SearchItemShort;

  get id() {
    return `${Paths.vid}/${this.card.id}`;
  }
}
