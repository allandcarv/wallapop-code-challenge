import { favoritesSlice } from '../slices';

const initialState = { ids: [] };

describe('favorite slice reducers', () => {
  it('should return the initial state', () => {
    expect(favoritesSlice.reducer(undefined, { type: undefined })).toEqual(
      initialState,
    );
  });

  it('should add a new favorite', () => {
    const { addFavorite } = favoritesSlice.actions;

    expect(
      favoritesSlice.reducer(initialState, addFavorite('Some ID')),
    ).toEqual({ ids: ['Some ID'] });
  });

  it('should remove a favorite', () => {
    const { removeFavorite } = favoritesSlice.actions;

    expect(
      favoritesSlice.reducer(
        { ids: ['Some ID', 'Some Other ID'] },
        removeFavorite('Some ID'),
      ),
    ).toEqual({ ids: ['Some Other ID'] });
  });
});
