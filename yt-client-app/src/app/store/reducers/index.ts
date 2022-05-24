import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from '../models/store.model';
import { apiItemsReducer } from './api-items.reducer';
import { StorageCustomItemsMetaReducer } from './custom-items.metareducer';
import { customItemsReducer } from './custom-items.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  customItems: customItemsReducer,
  apiItems: apiItemsReducer,
};

export const metaReducers = {
  metaReducers: [StorageCustomItemsMetaReducer],
};
