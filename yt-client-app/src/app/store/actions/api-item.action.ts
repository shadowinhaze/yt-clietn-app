import { createAction, props } from '@ngrx/store';
import { SearchItemShort } from 'src/app/youtube/models/search-item.model';
import { ActionCommands } from '../constants/action-commands';

const addApiItems = createAction(
  ActionCommands.apiFetch,
  props<{ apiItems: SearchItemShort[] }>()
);

const sortApiItems = createAction(
  ActionCommands.settingsSort,
  props<{ sortType: SortType; sortDirection: SortDirection }>()
);

const filterApiItems = createAction(
  ActionCommands.settingsFilter,
  props<{ filterValue: string }>()
);

export { addApiItems, sortApiItems, filterApiItems };
