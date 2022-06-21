import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreKey, ApiItems } from '../models/store.model';

const selectApiItemsFeature = createFeatureSelector<ApiItems>(
  AppStoreKey.apiItems
);

const selectApiItems = createSelector(selectApiItemsFeature, (items) => items);

export { selectApiItems };
