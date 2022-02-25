import { IItem } from '../../interface';

export interface IUseFavorites {
  getFavorites: () => IItem[];
  addFavorite: (item: IItem) => void;
  removeFavorite: (title: string) => void;
  isFavorite: (title: string) => boolean;
}
