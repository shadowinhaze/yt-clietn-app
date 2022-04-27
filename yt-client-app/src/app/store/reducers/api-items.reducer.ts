import { createReducer, on } from '@ngrx/store';
import { DataProcessor } from 'src/app/shared/utils/data-processor';
import {
  addApiItems,
  filterApiItems,
  sortApiItems,
} from '../actions/api-item.action';
import { initialState } from '../store.model';

export const apiItemsReducer = createReducer(
  initialState.apiItems,
  on(addApiItems, (_, { apiItems }) => ({
    raw: [...apiItems],
    current: [...apiItems],
  })),

  on(sortApiItems, (state, { sortType, sortDirection }) => {
    const current = DataProcessor.sortData(
      state.current,
      sortType,
      sortDirection
    )!;

    return { ...state, current };
  }),

  on(filterApiItems, (state, { filterValue }) => ({
    ...state,
    current: DataProcessor.filterData(state.raw, filterValue),
  }))
);
