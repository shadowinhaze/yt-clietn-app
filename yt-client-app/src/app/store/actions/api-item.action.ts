import { createAction, props } from '@ngrx/store';
import { SortDirection, SortType } from 'src/app/shared/types/shared';
import { SearchItemShort } from 'src/app/youtube/models/search-item.model';
import { ActionCommands } from '../constants/action-commands';

const addApiItems = createAction(
  ActionCommands.apiFetch,
  props<{ apiItems: SearchItemShort[] }>()
);

const sortApiItems = createAction(
  ActionCommands.apiItemsSort,
  props<{ sortType: SortType; sortDirection: SortDirection }>()
);

const filterApiItems = createAction(
  ActionCommands.apiItemsFilter,
  props<{ filterValue: string }>()
);

export { addApiItems, sortApiItems, filterApiItems };
