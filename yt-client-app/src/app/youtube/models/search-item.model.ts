export interface SearchItemShort {
  id: string;
  publishedAt: Date;
  title: string;
  channelTitle: string;
  description: string;
  thumbnails: Thumbnails;
  tags: string[];
  statistics: Statistics;
}

export interface SearchItem {
  kind: string;
  etag: string;
  snippet: Snippet;
  statistics: Statistics;
  id: string | ItemId;
}

export interface ItemId {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  [thumbType: string]: Thumbnail;
}
