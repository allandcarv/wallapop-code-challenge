import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions } from '../../store';

import { IUseFavorites } from './use-favorites.interface';

export const useFavorites = (): IUseFavorites => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.favorites);

  const getFavorites = () => state.ids;

  const addFavorite = (id: string) => {
    dispatch(actions.favoritesActions.addFavorite(id));
  };

  const removeFavorite = (id: string) => {
    dispatch(actions.favoritesActions.removeFavorite(id));
  };

  const isFavorite = (id: string) => state.ids.includes(id);

  return {
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
