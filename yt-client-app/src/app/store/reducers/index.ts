import { apiItemsReducer } from './api-items.reducer';
import { customItemsReducer } from './custom-items.reducer';

export const reducers = {
  customItems: customItemsReducer,
  apiItems: apiItemsReducer,
};
