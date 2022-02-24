import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoriteSlice } from './favorites.interface';

const initialState: IFavoriteSlice = {
    ids: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            const hasId = state.ids.includes(action.payload);

            if (!hasId) {
                state.ids.push( action.payload );
            }
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.ids = state.ids.filter(id => id !== action.payload)
        }
    }
})