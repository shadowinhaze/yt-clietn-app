import { Injectable } from '@angular/core';
import { SortDirectionItems } from '../shared/routine-constants';

@Injectable()
export class SettingsService {
  private settings: Settings = {
    sortType: '',
    sortDirection: '',
    filterValue: '',
    searchValue: '',
  };

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
  }

  get sortDirection() {
    return this.settings.sortDirection;
  }

  get filterValue() {
    return this.settings.filterValue;
  }

  set filterValue(value: string) {
    this.settings.filterValue = value;
  }

  get searchValue() {
    return this.settings.searchValue;
  }

  set searchValue(value: string) {
    this.settings.searchValue = value;
  }

  get isAscending() {
    return this.settings.sortDirection === SortDirectionItems.asc;
  }
}
