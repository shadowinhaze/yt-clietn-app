import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-page',
  templateUrl: './search-results-page.component.html',
})
export class SearchResultsPageComponent implements OnInit, OnDestroy {
  public data: SearchItemShort[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.dataService.data$.subscribe((data) => {
        this.data = [...data];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
