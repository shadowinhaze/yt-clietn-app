type SortType = 'date' | 'views' | '';

type SortDirection = 'asc' | 'desc' | '';

interface Settings {
  sortType: SortType;
  sortDirection: SortDirection;
  filterValue: string;
  searchValue: string;
}

interface AuthParams {
  isAuthorized: boolean;
  userLogin: string;
  isHeaderActionsDisabled: boolean;
}
