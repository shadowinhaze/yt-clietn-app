import { Injectable } from '@angular/core';
import { LocalStorageKeys } from 'src/app/shared/constants/shared-constants';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static setStoreItem<T>(data: T, localStorageKey: LocalStorageKeys): void {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }

  static getStoreItem(localStorageKey: LocalStorageKeys) {
    const storedItem = localStorage.getItem(localStorageKey);

    return storedItem ? JSON.parse(storedItem) : '';
  }

  static clearStoredItem(localStorageKey: LocalStorageKeys): void {
    localStorage.removeItem(localStorageKey);
  }
}
