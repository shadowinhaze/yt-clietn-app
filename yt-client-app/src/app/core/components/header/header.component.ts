import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_TITLE, Paths } from 'src/app/shared/constants/shared-constants';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly mainTitle = APP_TITLE;

  public isSettingsPanelShown: boolean = false;

  public isSettingsTogglerActivated: boolean = false;

  public isOnSearchPage: boolean = false;

  private subscription = new Subscription();

  constructor(
    public auth: AuthService,
    private searchService: SearchService,
    private router: Router
  ) {
    this.subscription.add(
      this.router.events.subscribe((event: NavigationEvent) => {
        if (event instanceof NavigationEnd) {
          const path = event.urlAfterRedirects;
          this.isOnSearchPage =
            path.includes(Paths.main) && !path.includes(Paths.video);
        }
      })
    );
  }

  get currentSearchValue() {
    return this.searchService.searchValue.getValue();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.searchService.searchValue.subscribe((value) => {
        this.isSettingsTogglerActivated = Boolean(value);
        this.isSettingsPanelShown = Boolean(value);
      })
    );
  }

  toggleSettings() {
    this.isSettingsPanelShown = !this.isSettingsPanelShown;
  }

  navigateToMain(): void {
    if (this.auth.isAuthorized) this.router.navigate([Paths.home]);
  }

  onSearchValueSubmit(value: string) {
    this.searchService.newSearchValue = value;
  }

  logOut() {
    this.auth.logOut();
    this.searchService.newSearchValue = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
