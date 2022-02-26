import { LiHTMLAttributes } from 'react';

import { IItem } from '../../../shared/interface';
export interface IItemComponent extends LiHTMLAttributes<HTMLLIElement> {
  item: IItem;
  isFavorite: boolean;
  onFavorite: () => void;
}
