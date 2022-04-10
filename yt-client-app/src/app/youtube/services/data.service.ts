import { Injectable } from '@angular/core';
import youTubeMockResponse from '../mocks/mock-youtube-response.json';
import { SearchItem } from '../models/search-item.model';
import {
  SortDirectionItems,
  SortTypeItems,
} from '../../shared/constants/shared-constants';
import { DateParse } from '../../shared/utils/date';

@Injectable({ providedIn: 'root' })
export class DataService {
  private rawData: SearchItem[] = youTubeMockResponse.items;

  private data: SearchItem[] = [];

  constructor() {
    this.data = [...this.rawData];
  }

  get ytData(): SearchItem[] {
    return this.data;
  }

  sortData(type: SortType, direction: SortDirection): void {
    if (!type) return;
    const sorted =
      type === SortTypeItems.date
        ? [...this.data].sort(
            (a, b) =>
              DateParse(a.snippet.publishedAt) -
              DateParse(b.snippet.publishedAt)
          )
        : [...this.data].sort(
            (a, b) =>
              Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
          );
    this.data =
      direction === SortDirectionItems.asc ? sorted : sorted.reverse();
  }

  filterData(value: string): void {
    this.data = this.rawData.filter((item) => {
      const searchable = value.trim().toLowerCase();
      const { channelTitle, title, tags } = item.snippet;
      return (
        channelTitle.toLowerCase().includes(searchable) ||
        title.toLowerCase().includes(searchable) ||
        tags.includes(searchable)
      );
    });
  }

  getItem(id: string) {
    return this.data.find((item) => item.id === id);
  }
}
