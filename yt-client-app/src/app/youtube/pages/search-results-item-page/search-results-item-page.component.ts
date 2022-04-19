import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-item-page',
  templateUrl: './search-results-item-page.component.html',
})
export class SearchResultsItemPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  public card: Observable<SearchItemShort> | null = null;

  ngOnInit(): void {
    this.card = this.activatedRoute.data.pipe(
      map((data) => data?.['resultsItem'])
    );
  }
}
