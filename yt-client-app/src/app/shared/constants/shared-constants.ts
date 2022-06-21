export const APP_TITLE = 'yt-client-app';

export enum SortTypeItems {
  date = 'date',
  views = 'views',
}

export enum SortDirectionItems {
  asc = 'asc',
  desc = 'desc',
}

export enum TimesConstants {
  msInSec = 1000,
  secInHour = 3600,
  hourInDay = 24,
}

export enum ResultsListBreakPoints {
  desktop = 1100,
  tablet = 820,
  mobile = 540,
}

export enum ResultsListColumns {
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
}

export enum Paths {
  home = '/',
  main = 'youtube',
  auth = 'auth',
  signIn = 'sign-in',
  notFound = '404',
  admin = 'admin',
  newItem = 'creation-lab',
  vid = 'video',
}

export const FAKE_AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ';

export enum LocalStorageKeys {
  token = 'authToken',
  name = 'userName',
}

export const SEARCH_VALUE_MIN_LEN = 3;
