import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { APP_TITLE } from 'src/app/shared/routine-constants';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public mainTitle = APP_TITLE;

  public isActiveSettings: boolean = false;

  @Output() readonly setSortType = new EventEmitter();

  @Output() readonly filterValueChange = new EventEmitter();

  @Output() readonly searchValueChange = new EventEmitter();

  constructor(public settingsService: SettingsService) {}

  toggleSettings() {
    this.isActiveSettings = !this.isActiveSettings;
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
    this.isActiveSettings = true;
    this.searchValueChange.emit();
  }
}
