import { render } from '@testing-library/react';

import { Heading } from '..';
import { HeadingLevel } from '../heading/Heading.type';

describe('<Heading />', () => {
  const doRender = (level: HeadingLevel) =>
    render(<Heading level={level}>Some Text</Heading>);

  it('should render h1', () => {
    const { container } = doRender('first');

    const heading = container.querySelector('h1');

    expect(heading).toBeInTheDocument();
  });

  it('should render h2', () => {
    const { container } = doRender('second');

    const heading = container.querySelector('h2');

    expect(heading).toBeInTheDocument();
  });

  it('should render h3', () => {
    const { container } = doRender('third');

    const heading = container.querySelector('h3');

    expect(heading).toBeInTheDocument();
  });

  it('should render h4', () => {
    const { container } = doRender('fourth');

    const heading = container.querySelector('h4');

    expect(heading).toBeInTheDocument();
  });

  it('should render h5', () => {
    const { container } = doRender('fifth');

    const heading = container.querySelector('h5');

    expect(heading).toBeInTheDocument();
  });

  it('should render h6', () => {
    const { container } = doRender('sixth');

    const heading = container.querySelector('h6');

    expect(heading).toBeInTheDocument();
  });

  it('should render default', () => {
    const { container } = doRender('seventh' as HeadingLevel);

    const heading = container.querySelector('h1');

    expect(heading).toBeInTheDocument();
  });
});
