import { render } from '@testing-library/react';

import { StyledHeader } from '../Header/Header.styles';

import { Header } from '..';

jest.mock('../../../shared/store/hooks/index', () => ({
  ...jest.requireActual('../../../shared/store/hooks/index'),
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(() => ({
    items: [],
  })),
}));

jest.mock('../Header/Header.styles', () => ({
  StyledHeader: jest.fn(({ children }) => <header>{children}</header>),
}));

describe('<Header />', () => {
  const doRender = () => render(<Header />);

  it('should render correctly', () => {
    const { container } = doRender();

    const header = container.querySelector('header');

    expect(StyledHeader).toHaveBeenCalledWith(
      { children: expect.anything() },
      {},
    );

    expect(header).toBeInTheDocument();
  });
});
