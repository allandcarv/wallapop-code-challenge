import { render } from '@testing-library/react';

import { StyledSelect } from '../Select/Select.styles';

import { Select } from '..';

jest.mock('../Select/Select.styles', () => ({
  StyledSelect: jest.fn(({ children, onChange }) => (
    <select data-testid="mocked-select" onChange={onChange}>
      {children}
    </select>
  )),
}));

describe('<Select />', () => {
  afterEach(jest.clearAllMocks);

  const doRender = (onChange = jest.fn()) =>
    render(
      <Select
        values={['first-value', 'second-value']}
        texts={['First Value']}
        onChange={onChange}
      >
        Some Text
      </Select>,
    );

  it('should render correctly', () => {
    const { container } = doRender();

    const select = container.querySelector('select');

    expect(StyledSelect).toHaveBeenCalledWith(
      {
        onChange: expect.any(Function),
        children: expect.anything(),
      },
      {},
    );
    expect(select).toBeInTheDocument();
  });

  it('should render option text conditionally', () => {
    const { container } = doRender();

    const options = container.querySelectorAll('option');

    expect(options[0].innerHTML).toBe('First Value');
    expect(options[1].innerHTML).toBe('second-value');
  });
});
