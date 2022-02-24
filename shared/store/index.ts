import { configureStore } from '@reduxjs/toolkit';

import { favoritesSlice } from './slices';

export const actions = {
    favoritesActions: favoritesSlice.actions,
}

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


