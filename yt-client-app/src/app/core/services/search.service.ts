import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Subscription,
} from 'rxjs';
import {
  SEARCH_VALUE_MIN_LEN,
  TimesConstants,
} from 'src/app/shared/constants/shared-constants';
import { ActionCommands } from 'src/app/store/constants/action-commands';
import { SearchValueAction } from 'src/app/store/models/actions.model';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnDestroy {
  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private subscription = new Subscription();

  constructor(private api: ApiService, private store: Store) {
    this.subscription.add(
      this.debounce().subscribe((value) => {
        if (value !== '') {
          this.store.dispatch<SearchValueAction>({
            type: ActionCommands.searchSubmit,
            searchValue: value,
          });
        }
      })
    );
  }

  set newSearchValue(value: string) {
    this.searchValue.next(value.length >= SEARCH_VALUE_MIN_LEN ? value : '');
  }

  debounce() {
    return this.searchValue.pipe(
      debounceTime(TimesConstants.msInSec),
      distinctUntilChanged()
    );
  }

  search(searchValue: string) {
    return this.api.getFullItemsList(searchValue);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
