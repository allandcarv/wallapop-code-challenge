import { render, fireEvent } from '@testing-library/react';

import Image from 'next/image';
import { AiOutlineMail, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { StyledLi } from '../Item/Item.styles';

import { Item } from '..';

jest.mock('next/image', () =>
  jest.fn(() => <div data-testid="mocked-image">Some Mocked Image</div>),
);

jest.mock('react-icons/ai', () => ({
  AiOutlineMail: jest.fn(() => (
    <svg data-testid="mocked-mail-icon">Some Mocked Icon</svg>
  )),
  AiOutlineHeart: jest.fn(({ onClick }) => (
    <svg data-testid="mocked-outlined-heart-icon" onClick={onClick}>
      Some Mocked Icon
    </svg>
  )),
  AiFillHeart: jest.fn(({ onClick }) => (
    <svg data-testid="mocked-fill-heart-icon" onClick={onClick}>
      Some Mocked Icon
    </svg>
  )),
}));

jest.mock('../Item/Item.styles', () => ({
  StyledLi: jest.fn(({ children }) => (
    <li data-testid="mocked-li">{children}</li>
  )),
}));

const item = {
  description: 'Some Description',
  email: 'Some Email',
  image: 'Some Image',
  price: 'Some Price',
  title: 'Some Title',
};

describe('<Item />', () => {
  const mockedOnFavorite = jest.fn();
  const doRender = (isFavorite = true) =>
    render(
      <Item
        item={item}
        isFavorite={isFavorite}
        onFavorite={mockedOnFavorite}
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
        src: 'Some Image',
      },
      {},
    );
    expect(AiOutlineMail).toHaveBeenCalledWith(
      {
        size: '1.5em',
        title: 'Send Email to Some Email',
      },
      {},
    );
    expect(AiFillHeart).toHaveBeenCalledWith(
      {
        onClick: expect.any(Function),
        size: '1.5em',
        title: 'Remove from Favorites',
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

  it('should render an outline heart icon if the item is not favorite', () => {
    doRender(false);

    expect(AiFillHeart).not.toHaveBeenCalled();
    expect(AiOutlineHeart).toHaveBeenCalledWith(
      {
        onClick: expect.any(Function),
        size: '1.5em',
        title: 'Add to Favorites',
      },
      {},
    );
  });

  it('should trigger on favorite function when button is clicked', () => {
    const { getByTestId } = doRender();

    const button = getByTestId('mocked-fill-heart-icon');

    fireEvent.click(button);

    expect(mockedOnFavorite).toHaveBeenCalled();
  });
});
