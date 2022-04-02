import { Component, EventEmitter, Output } from '@angular/core';
import { TITLE } from 'src/app/app.component';
import { SettingsService } from 'src/app/services/settings.sevice';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public mainTitle = TITLE;

  public searchRequest: string = '';

  public isSettingsActive: boolean = false;

  @Output() setSortType = new EventEmitter();

  @Output() filterValueChange = new EventEmitter();

  @Output() searchValueChange = new EventEmitter();

  constructor(public settingsService: SettingsService) {}

  showSettings() {
    this.isSettingsActive = !this.isSettingsActive;
  }

  onFilterValueChange() {
    this.setSortType.emit();
    this.filterValueChange.emit();
  }

  onSortTypeChange() {
    this.setSortType.emit();
  }

  onSearchValueSubmit() {
    this.settingsService.searchValue = 'Angular';
    this.isSettingsActive = true;
    this.searchValueChange.emit();
  }
}
