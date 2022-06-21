import { CustomItem } from 'src/app/youtube/models/custom-item.model';

export interface Action {
  type: string;
}

export interface SearchValueAction extends Action {
  searchValue: string;
}

export interface AddCustomItemAction extends Action {
  customItem: CustomItem;
}
