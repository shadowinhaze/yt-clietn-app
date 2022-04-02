import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'yt-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})
export class SearchResultsItemComponent {
  @Input()
  card!: SearchItem;
}
