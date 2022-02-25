import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions } from '../../store';

import { IItem } from '../../interface';

import { IUseFavorites } from './use-favorites.interface';

export const useFavorites = (): IUseFavorites => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.favorites);

  const getFavorites = () => state.items;

  const addFavorite = (item: IItem) => {
    dispatch(actions.favoritesActions.addFavorite(item));
  };

  const removeFavorite = (title: string) => {
    dispatch(actions.favoritesActions.removeFavorite(title));
  };

  const isFavorite = (title: string) =>
    state.items.some((item) => item.title === title);

  return {
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
