import { render, fireEvent } from '@testing-library/react';

import { StyledButton } from '../Button/Button.styles';

import { Button } from '..';

jest.mock('../Button/Button.styles', () => ({
  StyledButton: jest.fn(({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  )),
}));

describe('<Button />', () => {
  afterEach(jest.clearAllMocks);

  const doRender = (onClick = jest.fn()) =>
    render(
      <Button customType="fill" onClick={onClick}>
        Some Text
      </Button>,
    );

  it('should render correctly', () => {
    const { container } = doRender();

    const button = container.querySelector('button');

    expect(StyledButton).toHaveBeenCalledWith(
      {
        customType: 'fill',
        onClick: expect.any(Function),
        children: expect.anything(),
      },
      {},
    );
    expect(button).toBeInTheDocument();
  });

  it('should trigger function when button is clicked', () => {
    const mockedOnClick = jest.fn();

    const { getByRole } = doRender(mockedOnClick);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
