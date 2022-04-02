import { Component, OnInit } from '@angular/core';
import { SearchItem } from './models/search-item.model';
import { DataService } from './services/data.service';
import { SettingsService } from './services/settings.sevice';

const TITLE = 'yt-client-app';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent implements OnInit {
  public title = TITLE;

  public results: SearchItem[] = [];

  public showResultsList: boolean = false;

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.results = this.dataService.ytData;
  }

  filterValueChange() {
    this.results = this.dataService.filterData(
      this.settingsService.filterValue
    );
  }

  setSortType() {
    this.results = this.dataService.sortData(
      this.results,
      this.settingsService.sortType,
      this.settingsService.sortDirection
    );
  }

  searchValueChange() {
    this.showResultsList = true;
  }
}

export { TITLE, AppComponent };
