import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  ResultsListBreakPoints,
  ResultsListColumns,
} from 'src/app/shared/constants/shared-constants';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export class SearchResultsListComponent implements OnInit {
  @Input() public data: SearchItemShort[] = [];

  public colsAmount: number | undefined;

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
