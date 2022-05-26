import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { AppStoreKey } from '../models/store.model';

const selectCustomItemsFeature = createFeatureSelector<CustomItem[]>(
  AppStoreKey.customItems
);

const selectCustomItems = createSelector(
  selectCustomItemsFeature,
  (items) => items
);

export { selectCustomItems };
