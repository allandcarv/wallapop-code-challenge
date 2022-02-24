import { renderHook } from '@testing-library/react-hooks';

const mockedDispatch = jest.fn();
jest.mock('../hooks/index', () => ({
  ...jest.requireActual('../hooks/index'),
  useAppDispatch: jest.fn(() => mockedDispatch),
  useAppSelector: jest.fn(() => ({
    ids: ['Some ID', 'Some Other ID'],
  })),
}));

jest.mock('../index', () => ({
  actions: {
    favoritesActions: {
      addFavorite: jest.fn((x) => x),
      removeFavorite: jest.fn((x) => x),
    },
  },
}));

import { useFavorites } from '../hooks';

describe('useFavorites', () => {
  afterEach(jest.clearAllMocks);

  it('should return all the favorite ids', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.getFavorites()).toEqual(['Some ID', 'Some Other ID']);
  });

  it('should return true if is favorite', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite('Some ID')).toBe(true);
  });

  it('should return false if is favorite', () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite('Anything Else')).toBe(false);
  });

  it('should add a favorite', () => {
    const { result } = renderHook(() => useFavorites());

    result.current.addFavorite('Yet Other ID');

    expect(mockedDispatch).toHaveBeenCalledWith('Yet Other ID');
  });

  it('should remove a favorite', () => {
    const { result } = renderHook(() => useFavorites());

    result.current.removeFavorite('ID to remove');

    expect(mockedDispatch).toHaveBeenCalledWith('ID to remove');
  });
});
