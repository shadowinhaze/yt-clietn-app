import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { DateParse } from '../shared/utils';

@Injectable()
export class SortDataService {
  // eslint-disable-next-line class-methods-use-this
  sort(
    arr: SearchItem[],
    type: SortType,
    direction: SortDirection
  ): SearchItem[] {
    if (!type) return arr;
    const sorted =
      type === 'date'
        ? [...arr].sort(
            (a, b) =>
              DateParse(a.snippet.publishedAt) -
              DateParse(b.snippet.publishedAt)
          )
        : [...arr].sort(
            (a, b) =>
              Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
          );
    return direction === 'asc' ? sorted : sorted.reverse();
  }
}
