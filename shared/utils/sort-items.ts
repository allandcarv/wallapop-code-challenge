import { IItem } from '../interface';

type sortBy = 'price' | 'description' | 'title' | 'email';

export const sortItems = (items: IItem[]) => (sort: sortBy) =>
  items.sort((a, b) => {
    if (a[sort] < b[sort]) {
      return -1;
    }

    if (a[sort] > b[sort]) {
      return 1;
    }

    return 0;
  });
