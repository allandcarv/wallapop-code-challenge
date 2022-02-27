import { render, fireEvent, waitFor } from '@testing-library/react';

import { ScrollToTop } from '..';

describe('<ScrollToTop />', () => {
  const doRender = (children: React.ReactNode = null) =>
    render(<ScrollToTop>{children}</ScrollToTop>);

  const mockScroll = () => {
    const mockedScrollHeight = jest.spyOn(
      document.documentElement,
      'scrollHeight',
      'get',
    );
    mockedScrollHeight.mockReturnValueOnce(1125);

    const mockedClientHeight = jest.spyOn(
      document.documentElement,
      'clientHeight',
      'get',
    );
    mockedClientHeight.mockReturnValueOnce(667);

    const mockedScrollTop = jest.spyOn(
      document.documentElement,
      'scrollTop',
      'get',
    );
    mockedScrollTop.mockReturnValueOnce(102);
  };

  afterEach(jest.clearAllMocks);

  it('should not return button if page was not scrolled', () => {
    const { queryByRole } = doRender();

    const button = queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });

  it('should return button if page was scrolled', async () => {
    mockScroll();
    let button;
    const { getByRole } = doRender();

    fireEvent.scroll(document, { target: { scrollY: 100 } });

    await waitFor(() => (button = getByRole('button')));

    expect(button).toBeInTheDocument();
  });

  it('should scroll to top when clicked', async () => {
    mockScroll();
    const mockedScrollTo = jest.fn();
    window.document.documentElement.scrollTo = mockedScrollTo;
    let button;
    const { getByRole } = doRender();

    fireEvent.scroll(document, { target: { scrollY: 100 } });

    await waitFor(() => {
      button = getByRole('button');
      fireEvent.click(button);
    });

    expect(mockedScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should render options children if provided', async () => {
    mockScroll();
    const { container } = doRender(<p>Some other content</p>);
    let otherElement;

    fireEvent.scroll(document, { target: { scrollY: 100 } });

    await waitFor(() => {
      otherElement = container.querySelector('p');
      expect(otherElement?.innerHTML).toBe('Some other content');
    });
  });
});
