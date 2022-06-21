import { createReducer, on } from '@ngrx/store';
import { addCustomItem, clearCustomItems } from '../actions/custom-item.action';
import { initialState } from '../models/store.model';

export const customItemsReducer = createReducer(
  initialState.customItems,
  on(addCustomItem, (state, payload) => [...state, payload.customItem]),
  on(clearCustomItems, () => [])
);
