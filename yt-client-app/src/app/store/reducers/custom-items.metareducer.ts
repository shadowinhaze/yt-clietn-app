import { ActionReducer } from '@ngrx/store';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalStorageKeys } from 'src/app/shared/constants/shared-constants';
import { ActionCommands } from '../constants/action-commands';
import { AddCustomItemAction } from '../models/actions.model';

export function StorageCustomItemsMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  let onInit = true;

  return function processed(state, action) {
    if (onInit) {
      onInit = false;
      const savedCards =
        LocalStorageService.getStoreItem(LocalStorageKeys.cards) || [];
      return reducer({ ...state, customItems: savedCards }, action);
    }

    if (action.type === ActionCommands.addCustomItem) {
      LocalStorageService.setStoreItem(
        [...state.customItems, (action as AddCustomItemAction).customItem],
        LocalStorageKeys.cards
      );
    }

    return reducer(state, action);
  };
}
