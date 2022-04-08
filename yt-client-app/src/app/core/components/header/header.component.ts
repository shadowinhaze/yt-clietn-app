import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import { APP_TITLE } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public mainTitle = APP_TITLE;

  public isSettingsActivated: boolean = false;

  public isSettingsActionDisabled: boolean = true;

  constructor(public settingsService: SettingsService) {}

  toggleSettings() {
    this.isSettingsActivated = !this.isSettingsActivated;
  }

  onSearchValueSubmit() {
    this.settingsService.searchValue = 'Angular';
    this.isSettingsActivated = true;
    this.isSettingsActionDisabled = false;
    this.settingsService.isSearchListShown = true;
  }
}
