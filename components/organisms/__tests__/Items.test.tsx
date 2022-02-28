import { render, fireEvent, waitFor } from '@testing-library/react';

import { BiSad } from 'react-icons/bi';

import { Button, Select } from '../../atoms';

import { Item } from '../../molecules/';

import { useFavorites } from '../../../shared/hooks';
import { searchItems, sortItems } from '../../../shared/utils';

import { StyledMain } from '../Items/Items.styles';
import { Items } from '..';

jest.mock('react-icons/bi', () => ({
  BiSad: jest.fn(() => (
    <svg data-testid="mocked-sad-icon">Some Mocked Icon</svg>
  )),
}));

jest.mock('react-icons/bi', () => ({
  BiSad: jest.fn(() => (
    <svg data-testid="mocked-sad-icon">Some Mocked Icon</svg>
  )),
}));

jest.mock('../../atoms', () => ({
  Button: jest.fn(({ onClick }) => (
    <button data-testid="mocked-button-atom" onClick={onClick}>
      Some Mocked Button
    </button>
  )),
  Select: jest.fn(() => (
    <select data-testid="mocked-select-atom">
      <option value="some-value">Some Option</option>
    </select>
  )),
}));

jest.mock('../../molecules', () => ({
  Item: jest.fn(({ onFavorite }) => (
    <div data-testid="mocked-item-molecule" onClick={onFavorite}>
      Some Mocked Item
    </div>
  )),
}));

const mockedAddFavorite = jest.fn();
const mockedRemoveFavorite = jest.fn();
const mockedIsFavorite = jest.fn((x) => (x === 'Some Item A' ? true : false));

jest.mock('../../../shared/hooks', () => ({
  useFavorites: jest.fn(() => ({
    addFavorite: mockedAddFavorite,
    removeFavorite: mockedRemoveFavorite,
    isFavorite: mockedIsFavorite,
  })),
}));

jest.mock('../../../shared/utils', () => ({
  searchItems: jest.fn(),
  sortItems: jest.fn((x) => jest.fn(() => x)),
}));

jest.mock('../Items/Items.styles', () => ({
  StyledMain: jest.fn(({ children }) => (
    <main data-testid="mocked-main">{children}</main>
  )),
}));

const items = [
  {
    title: 'Some Item A',
    description: 'Some Description A',
    image: 'Some Image A',
    price: 'Some Price A',
    email: 'Some Email A',
  },
  {
    title: 'Some Item B',
    description: 'Some Description B',
    image: 'Some Image B',
    price: 'Some Price B',
    email: 'Some Email B',
  },
  {
    title: 'Some Item C',
    description: 'Some Description C',
    image: 'Some Image C',
    price: 'Some Price C',
    email: 'Some Email C',
  },
  {
    title: 'Some Item D',
    description: 'Some Description D',
    image: 'Some Image D',
    price: 'Some Price D',
    email: 'Some Email D',
  },
  {
    title: 'Some Item E',
    description: 'Some Description E',
    image: 'Some Image E',
    price: 'Some Price E',
    email: 'Some Email E',
  },
  {
    title: 'Some Item F',
    description: 'Some Description F',
    image: 'Some Image F',
    price: 'Some Price F',
    email: 'Some Email F',
  },
];
describe('<Items />', () => {
  const doRender = (i = items) => render(<Items items={i} />);

  afterEach(jest.clearAllMocks);

  it('should render correctly', () => {
    const getItem = (item: number) => ({
      item: items[item],
      isFavorite: item === 0 ? true : false,
      onFavorite: expect.any(Function),
    });

    doRender();

    expect(useFavorites).toHaveBeenCalled();
    expect(searchItems).toHaveBeenCalled();
    expect(sortItems).toHaveBeenCalled();

    expect(StyledMain).toHaveBeenCalledWith(
      {
        children: expect.anything(),
      },
      {},
    );
    expect(Select).toHaveBeenCalledWith(
      {
        values: ['title', 'description', 'email', 'price'],
        texts: ['Title', 'Description', 'Email', 'Price'],
        value: 'title',
        onChange: expect.any(Function),
        id: 'search-by',
      },
      {},
    );

    expect(Select).toHaveBeenNthCalledWith(
      1,
      {
        values: ['title', 'description', 'email', 'price'],
        texts: ['Title', 'Description', 'Email', 'Price'],
        value: 'title',
        onChange: expect.any(Function),
        id: 'search-by',
      },
      {},
    );
    expect(Select).toHaveBeenNthCalledWith(
      2,
      {
        values: ['title', 'description', 'email', 'price'],
        texts: ['Title', 'Description', 'Email', 'Price'],
        value: 'title',
        onChange: expect.any(Function),
        id: 'sort-by',
        disabled: false,
      },
      {},
    );

    for (let i = 0; i < 5; i++) {
      expect(Item).toHaveBeenNthCalledWith(i + 1, getItem(i), {});
    }

    expect(Button).toHaveBeenCalledWith(
      {
        customType: 'fill',
        onClick: expect.any(Function),
        children: 'Show More',
      },
      {},
    );
  });

  it('should show no results msg when no item is available', () => {
    doRender([]);

    expect(Item).not.toHaveBeenCalled();
    expect(BiSad).toHaveBeenCalledWith({ size: '1.5rem' }, {});
  });

  it('should show more items when button show more is clicked', async () => {
    const { getByTestId, getAllByTestId } = doRender();

    const button = getByTestId('mocked-button-atom');

    fireEvent.click(button);

    await waitFor(() =>
      expect(getAllByTestId('mocked-item-molecule').length).toBe(6),
    );
  });

  it('should set is favorite item', () => {
    const { getAllByTestId } = doRender(items.slice(0, 2));

    const mockedItem = getAllByTestId('mocked-item-molecule');

    fireEvent.click(mockedItem[0]);
    fireEvent.click(mockedItem[1]);

    expect(mockedAddFavorite).toHaveBeenCalledWith(items[1]);
    expect(mockedRemoveFavorite).toHaveBeenCalledWith('Some Item A');
  });
});
