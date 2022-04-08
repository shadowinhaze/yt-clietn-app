import { Component, Input } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import { SortTypeItems } from 'src/app/shared/constants/shared-constants';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'yt-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
})
export class FilterSortComponent {
  readonly sortTypes = {
    date: SortTypeItems.date,
    views: SortTypeItems.views,
  };

  @Input() btnsDisabled = true;

  constructor(
    public settingsService: SettingsService,
    private dataService: DataService
  ) {}

  setSortType(type: SortType) {
    this.settingsService.sortType = type;
    this.dataService.sortData(
      this.settingsService.sortType,
      this.settingsService.sortDirection
    );
    this.settingsService.update();
  }

  setFilter(value: string) {
    this.settingsService.sortType = '';
    this.settingsService.filterValue = value;
    this.dataService.filterData(this.settingsService.filterValue);
    this.settingsService.update();
  }

  getIconCondition(type: SortType) {
    return this.settingsService.sortType === type;
  }
}
