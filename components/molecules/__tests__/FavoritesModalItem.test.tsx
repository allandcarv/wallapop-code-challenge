import { render, fireEvent } from '@testing-library/react';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';

import { StyledLi } from '../FavoritesModalItem/FavoritesModalItem.styles';

import { FavoritesModalItem } from '..';

jest.mock('next/image', () =>
  jest.fn(() => <div data-testid="mocked-image">Some Mocked Image</div>),
);

jest.mock('react-icons/ai', () => ({
  AiOutlineDelete: jest.fn(({ onClick }) => (
    <svg data-testid="mocked-icon" onClick={onClick}>
      Some Mocked Icon
    </svg>
  )),
}));

jest.mock('../FavoritesModalItem/FavoritesModalItem.styles', () => ({
  StyledLi: jest.fn(({ children }) => (
    <li data-testid="mocked-li">{children}</li>
  )),
}));

describe('<FavoritesModalItem />', () => {
  const mockedOnRemoveItem = jest.fn();
  const doRender = () =>
    render(
      <FavoritesModalItem
        image="some-image"
        onRemoveItem={mockedOnRemoveItem}
        title="Some Title"
      />,
    );

  afterEach(jest.clearAllMocks);

  it('should render correctly', () => {
    doRender();

    expect(Image).toHaveBeenCalledWith(
      {
        alt: 'Some Title',
        layout: 'fill',
        objectFit: 'cover',
        src: 'some-image',
      },
      {},
    );
    expect(AiOutlineDelete).toHaveBeenCalledWith(
      {
        onClick: expect.any(Function),
        size: '1.5rem',
        title: 'Remove Some Title from favorites',
      },
      {},
    );
    expect(StyledLi).toHaveBeenCalledWith(
      {
        children: expect.anything(),
      },
      {},
    );
  });

  it('should trigger on remove item function when icon is clicked', () => {
    const { getByTestId } = doRender();

    const icon = getByTestId('mocked-icon');

    fireEvent.click(icon);

    expect(mockedOnRemoveItem).toHaveBeenCalled();
  });
});
