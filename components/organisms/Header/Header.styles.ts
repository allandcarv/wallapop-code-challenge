import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: var(--blue);

  section.container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    h1 {
      font-size: 1.3rem;
      color: var(--light-gray);
    }

    button {
      font-size: 1rem;
      color: var(--light-gray);
      border-color: var(--light-gray);
    }

    @media only screen and (min-width: ${BREAKPOINTS.small}) {
      max-width: 80%;
      margin: auto;

      h1 {
        font-size: 2rem;
      }

      button {
        font-size: 1.5rem;
      }
    }

    @media only screen and (min-width: ${BREAKPOINTS.large}) {
      max-width: 60%;
    }
  }
`;
