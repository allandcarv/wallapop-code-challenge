import { LiHTMLAttributes } from 'react';

export interface IFavoritesModalItemComponent
  extends LiHTMLAttributes<HTMLLIElement> {
  title: string;
  image: string;
  onRemoveItem: () => void;
}
