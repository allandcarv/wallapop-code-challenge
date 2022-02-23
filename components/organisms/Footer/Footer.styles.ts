import styled from 'styled-components';

import { blue, lightGray, gray } from '../../../styles/colors';

export const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blue};

  p {
    color: ${lightGray};

    a {
      color: ${lightGray};
      transition: color 0.4s;

      &:hover {
        color: ${gray};
      }
    }
  }
`;
