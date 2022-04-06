import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { SortTypeItems } from 'src/app/shared/routine-constants';

@Component({
  selector: 'yt-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
})
export class FilterSortComponent {
  @Output() readonly sortTypeChange = new EventEmitter();

  @Output() readonly filterValueChange = new EventEmitter();

  readonly sortTypes = {
    date: SortTypeItems.date,
    views: SortTypeItems.views,
  };

  constructor(public settingsService: SettingsService) {}

  actionSort(type: SortType) {
    this.settingsService.sortType = type;
    this.sortTypeChange.emit();
  }

  actionFilter(model: string) {
    this.settingsService.filterValue = model;
    this.settingsService.sortType = '';
    this.filterValueChange.emit();
  }

  getIconCondition(type: SortType) {
    return this.settingsService.sortType === type;
  }
}
