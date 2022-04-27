import { createReducer, on } from '@ngrx/store';
import { addCustomItem } from '../actions/custom-item.action';
import { initialState } from '../store.model';

export const customItemsReducer = createReducer(
  initialState.customItems,
  on(addCustomItem, (state, payload) => [...state, payload.customItem])
);
