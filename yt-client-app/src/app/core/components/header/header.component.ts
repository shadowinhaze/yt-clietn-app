import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SettingsService } from 'src/app/core/services/settings.service';
import { APP_TITLE, Paths } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly mainTitle = APP_TITLE;

  public isSettingsPanelShown: boolean = false;

  public searchValue = '';

  constructor(
    public settingsService: SettingsService,
    public auth: AuthService,
    private router: Router
  ) {}

  toggleSettings() {
    this.isSettingsPanelShown = !this.isSettingsPanelShown;
  }

  navigateToMain(): void {
    if (this.auth.isAuthorized) this.router.navigate([Paths.home]);
  }

  private setSettings({ type, value }: { type: boolean; value: string }) {
    this.settingsService.searchValue = value;
    this.searchValue = value;
    this.isSettingsPanelShown = type;
    this.settingsService.isSearchListShown = type;
  }

  onSearchValueSubmit(value: string) {
    this.setSettings({ type: true, value });
  }

  logOut() {
    this.auth.logOut();
    this.setSettings({ type: false, value: '' });
  }
}
