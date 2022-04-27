import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-item-page',
  templateUrl: './search-results-item-page.component.html',
})
export class SearchResultsItemPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  private card: Observable<SearchItemShort | CustomItem> | null = null;

  isCustom = false;

  ngOnInit(): void {
    this.card = this.activatedRoute.data.pipe(
      map((data) => data?.['resultsItem'])
    );

    this.card.subscribe((data) => {
      this.isCustom = 'creationDate' in data;
    });
  }

  get customCard(): Observable<CustomItem> | null {
    return this.card as Observable<CustomItem> | null;
  }

  get apiCard(): Observable<SearchItemShort> | null {
    return this.card as Observable<SearchItemShort> | null;
  }
}
