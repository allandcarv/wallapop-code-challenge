import { favoritesSlice } from '../slices';

const initialState = { items: [] };

const firstItem = {
  description: 'Some Description',
  email: 'Some Email',
  image: 'Some Image',
  price: 'Some Price',
  title: 'Some Title',
};

const secondItem = {
  description: 'Some Other Description',
  email: 'Some Other Email',
  image: 'Some Other Image',
  price: 'Some Other Price',
  title: 'Some Other Title',
};

describe('favorite slice reducers', () => {
  it('should return the initial state', () => {
    expect(favoritesSlice.reducer(undefined, { type: undefined })).toEqual(
      initialState,
    );
  });

  it('should add a new favorite', () => {
    const { addFavorite } = favoritesSlice.actions;

    expect(
      favoritesSlice.reducer(initialState, addFavorite(firstItem)),
    ).toEqual({ items: [firstItem] });
  });

  it('should remove a favorite', () => {
    const { removeFavorite } = favoritesSlice.actions;

    expect(
      favoritesSlice.reducer(
        { items: [firstItem, secondItem] },
        removeFavorite('Some Title'),
      ),
    ).toEqual({ items: [secondItem] });
  });
});
