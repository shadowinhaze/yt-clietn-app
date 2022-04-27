import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  filterApiItems,
  sortApiItems,
} from 'src/app/store/actions/api-item.action';
import { AppStore } from 'src/app/store/store.model';
import { SortDirectionItems } from '../../shared/constants/shared-constants';

@Injectable({ providedIn: 'root' })
export class SettingsService implements OnDestroy {
  public settings$ = new BehaviorSubject<Settings>({
    sortType: '',
    sortDirection: '',
    filterValue: '',
  });

  private subscription = new Subscription();

  constructor(private store: Store<AppStore>) {
    this.subscription.add(
      this.settings$.subscribe(({ sortType, sortDirection, filterValue }) => {
        if (sortType !== '') {
          this.store.dispatch(
            sortApiItems({
              sortType,
              sortDirection,
            })
          );
        } else {
          this.store.dispatch(filterApiItems({ filterValue }));
        }
      })
    );
  }

  public getItem(field: keyof Settings): string {
    return this.settings$.getValue()[field];
  }

  public setSort(sortType: SortType): void {
    const sortDirection =
      this.getItem('sortDirection') === SortDirectionItems.desc
        ? SortDirectionItems.asc
        : SortDirectionItems.desc;

    this.settings$.next({ sortType, sortDirection, filterValue: '' });
  }

  public setFilter(value: string): void {
    this.settings$.next({
      sortType: '',
      sortDirection: '',
      filterValue: value,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
