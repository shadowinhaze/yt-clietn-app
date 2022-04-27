import { CustomItem } from '../youtube/models/custom-item.model';
import { SearchItemShort } from '../youtube/models/search-item.model';

export interface ApiItems {
  raw: SearchItemShort[];
  current: SearchItemShort[];
}

export interface AppStore {
  customItems: CustomItem[];
  apiItems: ApiItems;
}

export const initialState: AppStore = {
  customItems: [
    {
      id: '1123123-123214234-345345',
      title: 'test',
      description: 'lorem',
      imageLink:
        'https://images.unsplash.com/photo-1650744698456-f80b68db8345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      videoLink: 'https://www.youtube.com/watch?v=xObCVNJRE3s',
      creationDate: new Date(),
    },
  ],
  apiItems: {
    raw: [],
    current: [],
  },
};
