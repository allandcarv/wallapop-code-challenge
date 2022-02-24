import { useAppDispatch, useAppSelector } from '.';
import { actions } from '..';

interface IUseFavorites {
  getFavorites: () => string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

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
