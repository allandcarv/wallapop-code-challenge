import { render, screen } from '@testing-library/react';

import Home from '../index';

describe('<Home />', () => {
  const doRender = () => render(<Home />);

  it('should render a heading', () => {
    doRender();

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
