import { IButtonComponent } from './Button.interface';

import { StyledButton } from './Button.styles';

const Button: React.FC<IButtonComponent> = ({
  customType,
  children,
  onClick,
}) => {
  return (
    <StyledButton customType={customType} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
