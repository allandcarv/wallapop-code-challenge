import { render, fireEvent } from '@testing-library/react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { ModalContainer, Overlay } from '../Modal/Modal.styles';

import { Modal } from '..';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: jest.fn((x) => x),
}));

jest.mock('react-icons/ai', () => ({
  AiOutlineClose: jest.fn(({ onClick }) => (
    <svg data-testid="mocked-outline-close-icon" onClick={onClick}>
      Some mocked icon
    </svg>
  )),
}));

jest.mock('../Modal/Modal.styles', () => ({
  ModalContainer: jest.fn(({ children }) => (
    <div data-testid="mocked-modal-container">{children}</div>
  )),
  Overlay: jest.fn(({ onClick }) => (
    <div data-testid="mocked-overlay" onClick={onClick}>
      Some Mocked Data
    </div>
  )),
}));

describe('<Modal />', () => {
  window.document.getElementById = jest.fn();

  const mockedCloseModal = jest.fn();
  const doRender = () =>
    render(
      <Modal closeModal={mockedCloseModal} title="Some Title">
        <p>Some Children</p>
      </Modal>,
    );

  afterEach(jest.clearAllMocks);

  it('should render correctly', () => {
    const { container } = doRender();

    const head = container.querySelector('h2');
    const p = container.querySelector('p');

    expect(createPortal).toHaveBeenCalled();
    expect(Overlay).toHaveBeenCalledWith({ onClick: expect.any(Function) }, {});
    expect(ModalContainer).toHaveBeenCalledWith(
      { className: 'modal-container', children: expect.anything() },
      {},
    );
    expect(AiOutlineClose).toHaveBeenCalledWith(
      { title: 'Close Modal', size: '1.2rem', onClick: expect.any(Function) },
      {},
    );
    expect(head?.innerHTML).toBe('Some Title');
    expect(p?.innerHTML).toBe('Some Children');
  });

  it('should trigger on close modal function when overlay is clicked', () => {
    const { getByTestId } = doRender();

    const overlay = getByTestId('mocked-overlay');

    fireEvent.click(overlay);

    expect(mockedCloseModal).toHaveBeenCalled();
  });

  it('should trigger on close modal function when close button is clicked', () => {
    const { getByTestId } = doRender();

    const closeButton = getByTestId('mocked-outline-close-icon');

    fireEvent.click(closeButton);

    expect(mockedCloseModal).toHaveBeenCalled();
  });
});
