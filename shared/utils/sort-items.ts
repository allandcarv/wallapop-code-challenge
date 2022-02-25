import { IItem } from '../interface';
import { SortByType } from '../types';

export const sortItems = (items: IItem[]) => (sort: SortByType) => {
  const clonedItemsArray: IItem[] = JSON.parse(JSON.stringify(items));

  clonedItemsArray.sort((a, b) => {
    if (sort === 'price') {
      return +a[sort] - +b[sort];
    }

    if (a[sort] < b[sort]) {
      return -1;
    }

    if (a[sort] > b[sort]) {
      return 1;
    }

    return 0;
  });

  return clonedItemsArray;
};
