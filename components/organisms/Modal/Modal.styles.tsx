import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.section`
  width: 90%;
  height: 70%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  background-color: var(--light-gray);
  border: 2px solid var(--blue);
  border-radius: 0.4rem;

  header {
    position: relative;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid var(--blue);

    svg {
      position: absolute;
      right: 0.5rem;
      cursor: pointer;
    }
  }

  main {
    width: 100%;
    height: calc(100% - 3.5rem);
    padding: 0.5rem;
    overflow: auto;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    width: 40rem;
    height: 30rem;
  }
`;
