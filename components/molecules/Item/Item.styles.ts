import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  height: 8rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--blue);
  border-radius: 0.5rem;
  background-color: var(--light-gray);

  & + article {
    margin-top: 1rem;
  }

  section.image {
    width: 30%;
    height: 100%;
    position: relative;
  }

  section.data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    width: 60%;
    height: 100%;

    h2 {
      width: 90%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1rem;
    }

    p.description {
      display: inline-block;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 3.6rem;
      line-height: 1.2rem;
      font-size: 0.9rem;
    }

    p.price {
      font-family: 'Roboto Bold', sans-serif;
    }
  }

  section.actions {
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;

    a {
      margin-right: 0.2rem;
    }

    svg {
      cursor: pointer;
      transition: transform 0.4s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    height: 9rem;

    section.image {
      width: 25%;
      height: 100%;
      position: relative;
    }

    section.data {
      width: 75%;

      h2 {
        font-size: 1.2rem;
      }

      p.description {
        max-height: 3.9rem;
        line-height: 1.3rem;
        font-size: 1rem;
      }
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    height: 11rem;

    section.data {
      p.description {
        max-height: 4.2rem;
        line-height: 1.4rem;
        font-size: 1.1rem;
      }
    }
  }
`;
