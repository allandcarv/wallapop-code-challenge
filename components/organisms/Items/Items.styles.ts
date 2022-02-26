import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const StyledMain = styled.main`
  grid-area: main;
  padding: 0.5rem;

  > section {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    article {
      width: 100%;

      & + article {
        margin-top: 0.5rem;
      }

      &.sort__by {
        display: flex;
        flex-direction: column;

        select {
          height: 2.2rem;
        }
      }

      &.search__by {
        div.search__box {
          display: flex;
          align-items: center;
          height: 2.2rem;

          select,
          input {
            display: block;
            height: 100%;
          }

          select {
            border-radius: 0.2rem 0 0 0.2rem;
          }

          input {
            width: 100%;
            padding: 0.5rem;
            border: 0.1rem solid var(--blue);
            border-radius: 0 0.2rem 0.2rem 0;
          }
        }
      }

      label {
        margin-right: 0.5rem;
      }

      select {
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }

  > button {
    display: block;
    margin: 1rem auto 0;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    width: 80%;
    height: 100%;
    margin: auto;

    > section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      article {
        & + article {
          margin-top: 0;
        }

        &.sort__by {
          width: 30%;
          display: flex;
          flex-direction: column;
        }

        &.search__by {
          width: 50%;
          display: flex;
          flex-direction: column;
        }

        select {
          font-size: 1rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    max-width: 60%;

    > section {
      label {
        font-size: 1.2rem;
      }

      article {
        &.sort__by {
          width: 20%;
          display: flex;
          flex-direction: column;

          select {
            height: 2.4rem;
          }
        }

        &.search__by {
          width: 50%;
          display: flex;
          flex-direction: column;

          div.search__box {
            height: 2.4rem;
          }
        }

        select {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
