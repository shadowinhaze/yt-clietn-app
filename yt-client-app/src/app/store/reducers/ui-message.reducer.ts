import { createReducer, on } from '@ngrx/store';
import { setUIMessage } from '../actions/ui-message.action';
import { initialState } from '../models/store.model';

export const uiMessageReducer = createReducer(
  initialState.uiMessage,
  on(setUIMessage, (_, { uiMessage }) => ({ ...uiMessage }))
);
