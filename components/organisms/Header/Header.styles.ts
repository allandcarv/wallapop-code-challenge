import styled from 'styled-components';

import { blue, lightGray } from '../../../styles/colors';

export const StyledHeader = styled.header`
  grid-area: 'header';
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blue};

  h1 {
    color: ${lightGray};
  }
`;
