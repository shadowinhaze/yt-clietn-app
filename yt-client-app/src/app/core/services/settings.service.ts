import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SortDirectionItems } from '../../shared/constants/shared-constants';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private settings: Settings = {
    sortType: '',
    sortDirection: '',
    filterValue: '',
    searchValue: '',
  };

  public resultsListShowChange: Subject<boolean> = new Subject<boolean>();

  public settingsChange: Subject<Settings> = new Subject<Settings>();

  private isResultsListShown: boolean = false;

  constructor() {
    this.resultsListShowChange.subscribe((status) => {
      this.isResultsListShown = status;
    });
  }

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
  }

  get searchValue() {
    return this.settings.searchValue;
  }

  set searchValue(value: string) {
    this.settings.searchValue = value;
    this.update();
  }

  get isAscending() {
    return this.settings.sortDirection === SortDirectionItems.asc;
  }

  get isSearchListShown() {
    return this.isResultsListShown;
  }

  set isSearchListShown(value: boolean) {
    if (value && this.settings.searchValue !== '') {
      this.resultsListShowChange.next(true);
    } else {
      this.resultsListShowChange.next(false);
    }
  }

  update(): void {
    this.settingsChange.next({ ...this.settings });
  }
}
