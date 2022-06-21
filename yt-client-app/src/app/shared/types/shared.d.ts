type SortType = 'date' | 'views' | '';

type SortDirection = 'asc' | 'desc' | '';

interface Settings {
  sortType: SortType;
  sortDirection: SortDirection;
  filterValue: string;
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
