type SortType = 'date' | 'views' | '';

type SortDirection = 'asc' | 'desc' | '';

const enum AppSettingsKey {
  sortType = 'sortType',
  sortDir = 'sortDirection',
  filterVal = 'filterValue',
}

interface AppSettings {
  [AppSettingsKey.sortType]: SortType;
  [AppSettingsKey.sortDir]: SortDirection;
  [AppSettingsKey.filterVal]: string;
}

interface AuthParams {
  isAuthorized: boolean;
  userLogin: string;
  isHeaderActionsDisabled: boolean;
}

type ErrorsBasePart = {
  req?: string;
  length?: string;
  pattern?: string;
  unknown?: string;
  minlength?: string;
  maxlength?: string;
  weak?: { [weakKey: string]: string };
};

interface ErrorsBase {
  [formaPart: string]: ErrorsBasePart;
}

type RequestValue = 'video' | 'search';

type LoginFormKeys = 'login' | 'pass';

type NewItemFormKeys = 'title' | 'description' | 'image' | 'video';

type NewItemFormCollection = NewItemFormItem[];

interface NewItemFormItem {
  name: NewItemFormKeys;
  title: string;
  placeholder: string;
  required: boolean;
}

export {
  SortType,
  AppSettingsKey,
  AppSettings,
  AuthParams,
  ErrorsBase,
  RequestValue,
  LoginFormKeys,
  NewItemFormKeys,
  NewItemFormCollection,
  NewItemFormItem,
};
