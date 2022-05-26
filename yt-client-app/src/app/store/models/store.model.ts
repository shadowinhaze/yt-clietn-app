import { CustomItem } from '../../youtube/models/custom-item.model';
import { SearchItemShort } from '../../youtube/models/search-item.model';

export interface ApiItems {
  raw: SearchItemShort[];
  current: SearchItemShort[];
}

export enum AppStoreKey {
  customItems = 'customItems',
  apiItems = 'apiItems',
  uiMessage = 'uiMessage',
}

export enum UIMessageType {
  def = 'default',
  scs = 'success',
  err = 'error',
}

export interface UIMessage {
  message: string;
  type: UIMessageType;
}

export interface AppStore {
  [AppStoreKey.customItems]: CustomItem[];
  [AppStoreKey.apiItems]: ApiItems;
  [AppStoreKey.uiMessage]: UIMessage;
}

export const initialState: AppStore = {
  [AppStoreKey.customItems]: [],
  [AppStoreKey.apiItems]: {
    raw: [],
    current: [],
  },
  [AppStoreKey.uiMessage]: {
    message: '',
    type: UIMessageType.def,
  },
};
