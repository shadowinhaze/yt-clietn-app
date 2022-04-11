import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SettingsService } from 'src/app/core/services/settings.service';
import { APP_TITLE, Paths } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly mainTitle = APP_TITLE;

  public isSettingsPanelActivated: boolean = false;

  public isSettingsActionDisabled: boolean = true;

  public authParams: AuthParams = {
    isAuthorized: false,
    userLogin: '',
    isHeaderActionsDisabled: true,
  };

  public isOnSingIn: boolean = false;

  constructor(
    public settingsService: SettingsService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.authParams = {
      isAuthorized: this.auth.isAuth,
      userLogin: this.auth.userLogin,
      isHeaderActionsDisabled: !this.auth.isAuth,
    };

    this.auth.authChange.subscribe((status) => {
      this.authParams = {
        isAuthorized: status,
        userLogin: this.auth.userLogin,
        isHeaderActionsDisabled: !status,
      };
    });
  }

  toggleSettings() {
    this.isSettingsPanelActivated = !this.isSettingsPanelActivated;
  }

  onSearchValueSubmit() {
    this.settingsService.searchValue = 'Angular';
    this.isSettingsPanelActivated = true;
    this.isSettingsActionDisabled = false;
    this.settingsService.isSearchListShown = true;
  }

  navigateToMain(): void {
    if (!this.authParams.isAuthorized) return;
    this.router.navigate([Paths.home]);
  }

  logOut() {
    this.auth.logOut();
    this.isSettingsPanelActivated = false;
    this.isSettingsActionDisabled = true;
    this.router.navigate([Paths.home, Paths.auth]);
  }
}
