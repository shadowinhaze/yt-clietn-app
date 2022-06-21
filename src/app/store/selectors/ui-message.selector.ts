import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreKey, UIMessage } from '../models/store.model';

const selectUIMessageFeature = createFeatureSelector<UIMessage>(
  AppStoreKey.uiMessage
);

const selectUIMessageText = createSelector(
  selectUIMessageFeature,
  (uiMsg) => uiMsg.message
);

const selectUIMessageType = createSelector(
  selectUIMessageFeature,
  (uiMsg) => uiMsg.type
);

const selectUIMessageFull = createSelector(
  selectUIMessageFeature,
  (uiMsg) => uiMsg
);

export { selectUIMessageText, selectUIMessageType, selectUIMessageFull };
