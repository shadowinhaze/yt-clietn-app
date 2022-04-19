import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortDirectionItems } from '../../shared/constants/shared-constants';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private settings: Settings = {
    sortType: '',
    sortDirection: '',
    filterValue: '',
  };

  public settings$ = new Subject<Settings>();

  get sortType() {
    return this.settings.sortType;
  }

  set sortType(sortType: SortType) {
    const sortDirection =
      this.settings.sortDirection === SortDirectionItems.desc
        ? SortDirectionItems.asc
        : SortDirectionItems.desc;
    this.settings = {
      ...this.settings,
      sortType,
      sortDirection,
    };
    this.update();
  }

  get sortDirection() {
    return this.settings.sortDirection;
  }

  get filterValue() {
    return this.settings.filterValue;
  }

  set filterValue(value: string) {
    this.settings.filterValue = value;
    this.update();
  }

  get isAscending() {
    return this.settings.sortDirection === SortDirectionItems.asc;
  }

  private update() {
    this.settings$.next({ ...this.settings });
  }
}
