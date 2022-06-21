import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import {
  SortDirectionItems,
  SortTypeItems,
} from 'src/app/shared/constants/shared-constants';
import { AppSettingsKey, SortType } from 'src/app/shared/types/shared';

@Component({
  selector: 'yt-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
})
export class FilterSortComponent {
  readonly SortActions = [
    {
      name: 'date',
      status: () => this.getIconCondition(SortTypeItems.date),
      action: () => this.setSortType(SortTypeItems.date),
    },
    {
      name: 'count of views',
      status: () => this.getIconCondition(SortTypeItems.views),
      action: () => this.setSortType(SortTypeItems.views),
    },
  ];

  constructor(private settingsService: SettingsService) {}

  public get filterValue() {
    return this.settingsService.getItem(AppSettingsKey.filterVal);
  }

  public get isAscending() {
    return (
      this.settingsService.getItem(AppSettingsKey.sortDir) ===
      SortDirectionItems.asc
    );
  }

  setSortType(type: SortType) {
    this.settingsService.setSort(type);
  }

  setFilter(value: string) {
    this.settingsService.setFilter(value);
  }

  getIconCondition(type: SortType) {
    return this.settingsService.getItem(AppSettingsKey.sortType) === type;
  }
}
