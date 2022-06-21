import { createAction, props } from '@ngrx/store';
import { CustomItem } from '../../youtube/models/custom-item.model';
import { ActionCommands } from '../constants/action-commands';

const addCustomItem = createAction(
  ActionCommands.addCustomItem,
  props<{ customItem: CustomItem }>()
);

const clearCustomItems = createAction(ActionCommands.clearCustomItems);

export { addCustomItem, clearCustomItems };
