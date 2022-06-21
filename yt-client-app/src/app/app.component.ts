import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { SettingsService } from './services/settings.service';
import { APP_TITLE } from './shared/routine-constants';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = APP_TITLE;

  public isActiveResultsList: boolean = false;

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService
  ) {}

  resultsList() {
    return this.dataService.ytData;
  }

  filterValueChange() {
    this.dataService.filterData(this.settingsService.filterValue);
  }

  setSortType() {
    this.dataService.sortData(
      this.settingsService.sortType,
      this.settingsService.sortDirection
    );
  }

  searchValueChange() {
    this.isActiveResultsList = true;
  }
}
