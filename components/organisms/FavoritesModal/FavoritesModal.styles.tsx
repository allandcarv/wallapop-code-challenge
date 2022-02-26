import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const NoFavoritesMsg = styled.p`
  text-align: center;
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--red);
    margin-right: 0.2rem;
  }

  strong {
    color: var(--red);
    font-size: 1rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    margin-top: 25%;
  }
`;
