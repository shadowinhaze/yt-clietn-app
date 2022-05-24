import { CustomItem } from '../../youtube/models/custom-item.model';
import { SearchItemShort } from '../../youtube/models/search-item.model';

export interface ApiItems {
  raw: SearchItemShort[];
  current: SearchItemShort[];
}

export interface AppStore {
  customItems: CustomItem[];
  apiItems: ApiItems;
}

export const initialState: AppStore = {
  customItems: [],
  apiItems: {
    raw: [],
    current: [],
  },
};
