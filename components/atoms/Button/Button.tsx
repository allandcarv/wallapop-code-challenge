import { IButtonComponent } from './Button.interface';

import { StyledButton } from './Button.styles';

const Button: React.FC<IButtonComponent> = ({
  customType,
  children,
  ...rest
}) => {
  return (
    <StyledButton customType={customType} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
