import { SearchItemShort } from 'src/app/youtube/models/search-item.model';
import {
  SortDirectionItems,
  SortTypeItems,
} from '../constants/shared-constants';
import { DateParse } from './date';

export class DataProcessor {
  static sortData(
    data: SearchItemShort[],
    type: SortType,
    direction: SortDirection
  ): SearchItemShort[] | null {
    if (type) {
      const sorted = [...data].sort((a, b) =>
        type === SortTypeItems.date
          ? DateParse(a.publishedAt) - DateParse(b.publishedAt)
          : Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );

      return direction === SortDirectionItems.asc ? sorted : sorted.reverse();
    }

    return null;
  }

  static filterData(
    rawData: SearchItemShort[],
    value: string
  ): SearchItemShort[] {
    const filteredItems = rawData.filter((item) => {
      const searchable = value.trim().toLowerCase();
      const { channelTitle, title, tags = [] } = item;

      return (
        channelTitle.toLowerCase().includes(searchable) ||
        title.toLowerCase().includes(searchable) ||
        tags.includes(searchable)
      );
    });

    return filteredItems;
  }
}
