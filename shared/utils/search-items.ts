import { IItem } from '../interface';
import { SortByType } from '../types';

export const searchItems =
  (items: IItem[]) => (searchBy: SortByType) => (value: string) =>
    items.filter((item) => item[searchBy].includes(value));
