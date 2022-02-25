import { render } from '@testing-library/react';
import 'jest-styled-components';

import { StyledButton } from '../Button/Button.styles';
import { ButtonType } from '../Button/Button.type';

describe('<StyledButton />', () => {
  const doRender = (type: ButtonType) =>
    render(<StyledButton customType={type}>Some Text</StyledButton>);

  afterEach(jest.clearAllMocks);

  it('should render a filled button', () => {
    const { getByRole } = doRender('fill');

    const button = getByRole('button');

    expect(button).toHaveStyleRule('color', 'var(--light-gray)');
    expect(button).toHaveStyleRule('background-color', 'var(--blue)');
  });

  it('should render an outlined button', () => {
    const { getByRole } = doRender('outline');

    const button = getByRole('button');

    expect(button).toHaveStyleRule('color', 'var(--blue)');
    expect(button).toHaveStyleRule('background-color', 'transparent');
  });
});
