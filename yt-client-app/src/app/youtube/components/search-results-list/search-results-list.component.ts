import { Component, HostListener, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import {
  ResultsListBreakPoints,
  ResultsListColumns,
} from 'src/app/shared/constants/shared-constants';
import { SettingsService } from '../../../core/services/settings.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'yt-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export class SearchResultsListComponent implements OnInit {
  public colsAmount: number | undefined;

  isShown: boolean = false;

  data: SearchItem[] = [];

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService
  ) {
    this.settingsService.resultsListShowChange.subscribe((value) => {
      if (value) {
        this.data = this.dataService.ytData;
      }
      this.isShown = value;
    });

    this.settingsService.settingsChange.subscribe(() => {
      this.data = this.dataService.ytData;
    });
  }

  ngOnInit() {
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
}
