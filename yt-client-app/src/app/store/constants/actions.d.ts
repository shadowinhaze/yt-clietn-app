interface Action {
  type: string;
}

interface SearchValueAction extends Action {
  searchValue: string;
}
