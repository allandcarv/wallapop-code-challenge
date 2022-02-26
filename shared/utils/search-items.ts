import { IItem } from '../interface';
import { SortByType } from '../types';

export const searchItems =
  (items: IItem[]) => (searchBy: SortByType) => (value: string) =>
    items.filter((item) => {
      const searchRegex = new RegExp(`^${value}`, 'i');

      return searchRegex.test(item[searchBy]);
    });
