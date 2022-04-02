import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

const breakPoints = {
  desktop: 1100,
  tablet: 820,
  mobile: 540,
};

@Component({
  selector: 'yt-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export class SearchResultsListComponent implements OnInit {
  public colsAmount: number | undefined;

  @Input() data: SearchItem[] = [];

  ngOnInit() {
    this.checkWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  handleColumns(event: Event) {
    const target = event.target as Window;
    this.checkWidth(target.innerWidth);
  }

  checkWidth(width: number) {
    if (width <= breakPoints.mobile) {
      this.colsAmount = 1;
    } else if (width <= breakPoints.tablet) {
      this.colsAmount = 2;
    } else if (width <= breakPoints.desktop) {
      this.colsAmount = 3;
    } else {
      this.colsAmount = 4;
    }
  }
}
