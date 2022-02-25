import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoriteSlice } from './favorites.interface';

import { IItem } from '../../interface';

const initialState: IFavoriteSlice = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IItem>) {
      const hasItem = state.items.some(
        (item) => item.title === action.payload.title,
      );

      if (!hasItem) {
        state.items.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.title !== action.payload);
    },
  },
});
