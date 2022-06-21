import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-item-page',
  templateUrl: './search-results-item-page.component.html',
})
export class SearchResultsItemPageComponent implements OnInit, OnDestroy {
  constructor(private activatedRoute: ActivatedRoute) {}

  public card: SearchItemShort | CustomItem | null = null;

  private routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.data
      .pipe(
        tap((data) => {
          this.card = data?.['resultsItem'];
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
