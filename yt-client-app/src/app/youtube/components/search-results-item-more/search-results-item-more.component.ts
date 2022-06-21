import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-item-more',
  templateUrl: './search-results-item-more.component.html',
  styleUrls: ['./search-results-item-more.component.scss'],
})
export class SearchResultsItemMoreComponent {
  @Input() public card: Observable<SearchItem> | null = null;
}
