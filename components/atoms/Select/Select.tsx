import { ISelectComponent } from './Select.interface';

import { StyledSelect } from './Select.styles';

const Select: React.FC<ISelectComponent> = ({ values, texts, ...rest }) => {
  return (
    <StyledSelect {...rest}>
      {values.map((v, i) => (
        <option key={v} value={v}>
          {texts && texts[i] ? texts[i] : v}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
