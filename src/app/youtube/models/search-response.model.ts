import { SearchItem } from './search-item.model';

export interface RootObject {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
  nextPageToken: string;
  regionCode: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
