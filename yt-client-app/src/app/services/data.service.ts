import { Injectable } from '@angular/core';
import youTubeResponse from '../mocks/mock-youtube-response.json';
import { SearchItem } from '../models/search-item.model';
import { FilterDataService } from './filter-data-service';
import { SortDataService } from './sort-data-service';

@Injectable()
export class DataService {
  private data: SearchItem[] = youTubeResponse.items;

  constructor(
    private sortService: SortDataService,
    private filterService: FilterDataService
  ) {}

  get ytData(): SearchItem[] {
    return this.data;
  }

  sortData(data: SearchItem[], type: SortType, direction: SortDirection) {
    return this.sortService.sort(data, type, direction);
  }

  filterData(value: string) {
    return this.filterService.filter(this.data, value);
  }
}
