import { IItem } from '../../../shared/interface';

export interface IItemComponent {
  item: IItem;
  isFavorite: boolean;
  onFavorite: () => void;
}
