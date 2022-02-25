import { renderHook } from '@testing-library/react-hooks';

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

const thirdItem = {
  description: 'Yet Other Description',
  email: 'Yet Other Email',
  image: 'Yet Other Image',
  price: 'Yet Other Price',
  title: 'Yet Other Title',
};

const mockedDispatch = jest.fn();
jest.mock('../../store/hooks/index', () => ({
  ...jest.requireActual('../../store/hooks/index'),
  useAppDispatch: jest.fn(() => mockedDispatch),
  useAppSelector: jest.fn(() => ({
    items: [firstItem, secondItem],
  })),
}));

jest.mock('../../store/index', () => ({
  actions: {
    favoritesActions: {
      addFavorite: jest.fn((x) => x),
      removeFavorite: jest.fn((x) => x),
    },
  },
}));

import { useFavorites } from '..';

describe('useFavorites', () => {
  afterEach(jest.clearAllMocks);

  it('should return all the favorite ids', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.getFavorites()).toEqual([firstItem, secondItem]);
  });

  it('should return true if is favorite', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite('Some Title')).toBe(true);
  });

  it('should return false if is favorite', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite('Anything Else')).toBe(false);
  });

  it('should add a favorite', () => {
    const { result } = renderHook(() => useFavorites());

    result.current.addFavorite(thirdItem);

    expect(mockedDispatch).toHaveBeenCalledWith(thirdItem);
  });

  it('should remove a favorite', () => {
    const { result } = renderHook(() => useFavorites());

    result.current.removeFavorite('Title to remove');

    expect(mockedDispatch).toHaveBeenCalledWith('Title to remove');
  });
});
