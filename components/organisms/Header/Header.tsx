import { Heading } from '../../atoms';

import { StyledHeader } from './Header.styles';

const Header: React.FC = () => (
  <StyledHeader>
    <Heading level="first">ITEM MANAGER</Heading>
  </StyledHeader>
);

export default Header;
