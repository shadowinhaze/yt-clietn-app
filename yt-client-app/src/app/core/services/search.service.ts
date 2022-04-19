import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { SEARCH_VALUE_MIN_LEN } from 'src/app/shared/constants/shared-constants';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private api: ApiService) {}

  set newSearchValue(value: string) {
    this.searchValue.next(value.length >= SEARCH_VALUE_MIN_LEN ? value : '');
  }

  debounce() {
    return this.searchValue.pipe(debounceTime(1000), distinctUntilChanged());
  }

  search(searchValue: string) {
    return this.api.getFullItemsList(searchValue);
  }
}
