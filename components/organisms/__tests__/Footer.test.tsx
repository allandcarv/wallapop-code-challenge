import { render } from '@testing-library/react';

import { StyledFooter } from '../Footer/Footer.styles';
import { Footer } from '..';

jest.mock('../Footer/Footer.styles', () => ({
    StyledFooter: jest.fn(({ children }) => <footer>{children}</footer>),
}));

describe('<Footer />', () => {
  const doRender = () => render(<Footer />);

  it('should render correctly', () => {
    const { container } = doRender();

    const footer = container.querySelector('footer');

    expect(StyledFooter).toHaveBeenCalledWith(
      { children: expect.anything() },
      {},
    );

    expect(footer).toBeInTheDocument();
  });
});
