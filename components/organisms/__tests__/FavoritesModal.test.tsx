import { render, fireEvent } from '@testing-library/react';

import { BiSad } from 'react-icons/bi';

import { FavoritesModalItem } from '../../molecules';
import { FavoritesModal } from '..';
import Modal from '../Modal/Modal';

import { useFavorites } from '../../../shared/hooks';
import { sortItems } from '../../../shared/utils';

import { FavoritesModalContainer } from '../FavoritesModal/FavoritesModal.styles';

jest.mock('react-icons/bi', () => ({
  BiSad: jest.fn(() => (
    <svg data-testid="mocked-sad-icon">Some Mocked Icon</svg>
  )),
}));

jest.mock('../../molecules', () => ({
  FavoritesModalItem: jest.fn(() => (
    <div data-testid="mocked-favorites-modal-item">Some Item</div>
  )),
}));

jest.mock('../Modal/Modal', () =>
  jest.fn(({ closeModal, children }) => (
    <div data-testid="mocked-modal" onClick={closeModal}>
      {children}
    </div>
  )),
);

jest.mock('../../../shared/hooks', () => ({
  useFavorites: jest.fn(() => ({
    getFavorites: jest.fn(() => [item]),
    useFavorites: jest.fn(),
  })),
}));

jest.mock('../../../shared/utils');

jest.mock('../FavoritesModal/FavoritesModal.styles', () => ({
  FavoritesModalContainer: jest.fn(({ children }) => (
    <div data-testid="mocked-favorites-modal-container">{children}</div>
  )),
}));

const item = {
  description: 'Some Description',
  email: 'Some Email',
  image: 'Some Image',
  price: 'Some Price',
  title: 'Some Title',
};

describe('<FavoritesModal />', () => {
  const mockedCloseModal = jest.fn();

  const doRender = (isOpen = true) =>
    render(<FavoritesModal isOpen={isOpen} closeModal={mockedCloseModal} />);

  afterEach(jest.clearAllMocks);

  it('should not render modal is isOpen === false', () => {
    doRender(false);

    expect(Modal).not.toHaveBeenCalled();
  });

  it('should render correctly', () => {
    (sortItems as jest.Mock).mockReturnValueOnce(() => [item]);

    doRender();

    expect(useFavorites).toHaveBeenCalled();

    expect(Modal).toHaveBeenCalledWith(
      {
        children: expect.anything(),
        closeModal: expect.any(Function),
        title: 'Favorite Items',
      },
      {},
    );

    expect(FavoritesModalContainer).toHaveBeenCalledWith(
      {
        children: expect.anything(),
      },
      {},
    );

    expect(FavoritesModalItem).toHaveBeenCalledWith(
      {
        image: 'Some Image',
        title: 'Some Title',
        onRemoveItem: expect.any(Function),
      },
      {},
    );
  });

  it('should render no results msg if no favorite is available', () => {
    (sortItems as jest.Mock).mockReturnValueOnce(() => []);
    doRender();

    expect(FavoritesModalItem).not.toHaveBeenCalled();
    expect(BiSad).toHaveBeenCalledWith({ size: '1.5rem' }, {});
  });

  it('should trigger close modal function', () => {
    (sortItems as jest.Mock).mockReturnValueOnce(() => [item]);

    const { getByTestId } = doRender();

    const modal = getByTestId('mocked-modal');

    fireEvent.click(modal);

    expect(mockedCloseModal).toHaveBeenCalled();
  });
});
