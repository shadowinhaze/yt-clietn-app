import { ActionReducerMap } from '@ngrx/store';
import { AppStore, AppStoreKey } from '../models/store.model';
import { apiItemsReducer } from './api-items.reducer';
import { StorageCustomItemsMetaReducer } from './custom-items.metareducer';
import { customItemsReducer } from './custom-items.reducer';
import { uiMessageReducer } from './ui-message.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  [AppStoreKey.customItems]: customItemsReducer,
  [AppStoreKey.apiItems]: apiItemsReducer,
  [AppStoreKey.uiMessage]: uiMessageReducer,
};

export const metaReducers = {
  metaReducers: [StorageCustomItemsMetaReducer],
};
