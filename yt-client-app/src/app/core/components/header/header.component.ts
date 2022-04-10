import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SettingsService } from 'src/app/core/services/settings.service';
import { APP_TITLE } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public mainTitle = APP_TITLE;

  public isSettingsActivated: boolean = false;

  public isSettingsActionDisabled: boolean = true;

  public isHeaderActionsDisabled: boolean = true;

  public authStatus: AuthStatus = {
    isLoggedIn: false,
    userName: '',
    isHeaderActionsDisabled: true,
  };

  constructor(
    public settingsService: SettingsService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.authStatus = {
      isLoggedIn: this.auth.status,
      userName: this.auth.user,
      isHeaderActionsDisabled: !this.auth.status,
    };

    this.auth.authChange.subscribe((status) => {
      this.authStatus = {
        isLoggedIn: status,
        userName: this.auth.user,
        isHeaderActionsDisabled: !status,
      };
    });
  }

  toggleSettings() {
    this.isSettingsActivated = !this.isSettingsActivated;
  }

  onSearchValueSubmit() {
    this.settingsService.searchValue = 'Angular';
    this.isSettingsActivated = true;
    this.isSettingsActionDisabled = false;
    this.settingsService.isSearchListShown = true;
  }

  navigateToMain(): void {
    if (!this.authStatus.isLoggedIn) return;
    this.router.navigate(['/']);
  }

  logOut() {
    this.auth.logOut();
    this.isSettingsActivated = false;
    this.isSettingsActionDisabled = true;
    this.router.navigate(['/', 'auth']);
  }
}
