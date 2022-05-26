import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectApiItems, selectCustomItems } from 'src/app/store';
import { AppStore } from 'src/app/store/models/store.model';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-page',
  templateUrl: './search-results-page.component.html',
})
export class SearchResultsPageComponent {
  public customData$: Observable<CustomItem[]> =
    this.store.select(selectCustomItems);

  public apiData$: Observable<SearchItemShort[]> = this.store
    .select(selectApiItems)
    .pipe(map((data) => data.current));

  constructor(private store: Store<AppStore>) {}
}
