export enum ActionCommands {
  apiFetch = '[API-ITEM] fetch items',
  apiItemsFilter = '[API-ITEM] filter items',
  apiItemsSort = '[API-ITEM] sort items',

  searchSubmit = '[SEARCH] new search value for API',

  addCustomItem = '[CUSTOM-ITEM] add new item',
  clearCustomItems = '[CUSTOM-ITEM] clear all items from store',

  setUIMessage = '[UI-MESSAGE] set new notification message',
  clearUIMessage = '[UI-MESSAGE] clear notification message',
}
