import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStore } from 'src/app/store/store.model';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-page',
  templateUrl: './search-results-page.component.html',
})
export class SearchResultsPageComponent {
  public customData$: Observable<CustomItem[]> =
    this.store.select('customItems');

  public apiData$: Observable<SearchItemShort[]> = this.store
    .select('apiItems')
    .pipe(map((data) => data.current));

  constructor(private store: Store<AppStore>) {}
}
