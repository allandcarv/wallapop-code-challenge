import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const StyledMain = styled.main`
  grid-area: main;
  padding: 0.5rem;

  button {
    display: block;
    margin: 1rem auto 0;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    max-width: 80%;
    margin: auto;
  }

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    max-width: 60%;
  }
`;
