import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import { SortTypeItems } from 'src/app/shared/constants/shared-constants';

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

  constructor(public settingsService: SettingsService) {}

  setSortType(type: SortType) {
    this.settingsService.sortType = type;
  }

  setFilter(value: string) {
    this.settingsService.sortType = '';
    this.settingsService.filterValue = value;
  }

  getIconCondition(type: SortType) {
    return this.settingsService.sortType === type;
  }
}
