import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

/* eslint-disable class-methods-use-this */
@Injectable()
export class FilterDataService {
  filter(arr: SearchItem[], filtValue: string): SearchItem[] {
    return arr.filter((item) => {
      const searchable = filtValue.trim().toLowerCase();
      const { channelTitle, title, tags } = item.snippet;
      return (
        channelTitle.toLowerCase().includes(searchable) ||
        title.toLowerCase().includes(searchable) ||
        tags.includes(searchable)
      );
    });
  }
}
