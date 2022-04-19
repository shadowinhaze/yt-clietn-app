import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SearchItemShort } from '../../youtube/models/search-item.model';
import {
  SortDirectionItems,
  SortTypeItems,
} from '../../shared/constants/shared-constants';
import { DateParse } from '../../shared/utils/date';
import { SearchService } from './search.service';
import { SettingsService } from './settings.service';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class DataService implements OnDestroy {
  private rawData: SearchItemShort[] = [];

  public data$: BehaviorSubject<SearchItemShort[]> = new BehaviorSubject<
    SearchItemShort[]
  >([]);

  private subscription = new Subscription();

  constructor(
    private searchService: SearchService,
    private settingsService: SettingsService,
    private apiService: ApiService
  ) {
    this.subscription.add(
      this.searchService.debounce().subscribe((value) => {
        if (!value) {
          this.rawData = [];
          this.data$.next([]);
        } else {
          this.fetchData(value);
        }
      })
    );

    this.subscription.add(
      this.settingsService.settings$.subscribe((settings) => {
        if (settings.sortType) {
          this.sortData(settings.sortType, settings.sortDirection);
        } else {
          this.filterData(settings.filterValue);
        }
      })
    );
  }

  fetchData(searchValue: string): void {
    this.searchService.search(searchValue).subscribe((data) => {
      this.rawData = [...data];
      this.data$.next([...data]);
    });
  }

  sortData(type: SortType, direction: SortDirection): void {
    if (!type) return;
    const sorted =
      type === SortTypeItems.date
        ? [...this.data$.getValue()].sort(
            (a, b) => DateParse(a.publishedAt) - DateParse(b.publishedAt)
          )
        : [...this.data$.getValue()].sort(
            (a, b) =>
              Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
          );
    this.data$.next(
      direction === SortDirectionItems.asc ? sorted : sorted.reverse()
    );
  }

  filterData(value: string): void {
    this.data$.next(
      this.rawData.filter((item) => {
        const searchable = value.trim().toLowerCase();
        const { channelTitle, title, tags = [] } = item;
        return (
          channelTitle.toLowerCase().includes(searchable) ||
          title.toLowerCase().includes(searchable) ||
          tags.includes(searchable)
        );
      })
    );
  }

  getItemById(id: string): SearchItemShort | Observable<SearchItemShort> {
    return this.rawData.length
      ? this.rawData.find((item) => item.id === id)!
      : this.apiService.getItemById(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
