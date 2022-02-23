import { render } from '@testing-library/react';

import { Heading } from '../../atoms';
import { StyledHeader } from '../Header/Header.styles';

import { Header } from '..';

jest.mock('../../atoms/index', () => ({
  Heading: jest.fn(({ children }) => <h1>{children}</h1>),
}));

jest.mock('../Header/Header.styles', () => ({
  StyledHeader: jest.fn(({ children }) => <header>{children}</header>),
}));

describe('<Header />', () => {
  const doRender = () => render(<Header />);

  it('should render correctly', () => {
    const { container } = doRender();

    const header = container.querySelector('header');

    expect(Heading).toHaveBeenCalledWith(
      { level: 'first', children: expect.anything() },
      {},
    );

    expect(StyledHeader).toHaveBeenCalledWith(
      { children: expect.anything() },
      {},
    );

    expect(header).toBeInTheDocument();
  });
});
