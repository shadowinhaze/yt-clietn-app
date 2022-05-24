import { createAction, props } from '@ngrx/store';
import { CustomItem } from '../../youtube/models/custom-item.model';
import { ActionCommands } from '../constants/action-commands';

export const addCustomItem = createAction(
  ActionCommands.addCustomItem,
  props<{ customItem: CustomItem }>()
);
