import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import {
  ResultsListBreakPoints,
  ResultsListColumns,
} from 'src/app/shared/constants/shared-constants';
import { Subscription } from 'rxjs';
import { SettingsService } from '../../../core/services/settings.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'yt-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export class SearchResultsListComponent implements OnInit, OnDestroy {
  public colsAmount: number | undefined;

  isShown: boolean = false;

  data: SearchItem[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    if (this.settingsService.searchValue !== '') {
      this.data = this.dataService.ytData;
      this.isShown = true;
    }

    this.subscription.add(
      this.settingsService.resultsListShowChange.subscribe((value) => {
        if (value) {
          this.data = this.dataService.ytData;
        }
        this.isShown = value;
      })
    );

    this.subscription.add(
      this.settingsService.settingsChange.subscribe(() => {
        this.data = this.dataService.ytData;
      })
    );

    this.checkWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  handleColumns(event: Event) {
    const target = event.target as Window;
    this.checkWidth(target.innerWidth);
  }

  checkWidth(width: number) {
    if (width <= ResultsListBreakPoints.mobile) {
      this.colsAmount = ResultsListColumns.sm;
    } else if (width <= ResultsListBreakPoints.tablet) {
      this.colsAmount = ResultsListColumns.md;
    } else if (width <= ResultsListBreakPoints.desktop) {
      this.colsAmount = ResultsListColumns.lg;
    } else {
      this.colsAmount = ResultsListColumns.xl;
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
