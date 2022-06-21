import { createAction, props } from '@ngrx/store';
import { ActionCommands } from '../constants/action-commands';
import { UIMessage } from '../models/store.model';

const setUIMessage = createAction(
  ActionCommands.setUIMessage,
  props<{ uiMessage: UIMessage }>()
);

const clearUIMessage = createAction(ActionCommands.clearUIMessage);

export { setUIMessage, clearUIMessage };
