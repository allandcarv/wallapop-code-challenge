import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);

  p {
    margin-bottom: 0.5em;
    color: var(--light-gray);

    strong {
      font-family: 'Roboto Bold', sans-serif;
      color: inherit;
    }

    a {
      color: var(--light-gray);
      transition: color 0.4s;

      &:hover {
        color: var(--gray);
      }
    }
  }

  section {
    a {
      & + a {
        margin-left: 0.5rem;
      }

      svg {
        fill: var(--light-gray);
        transition: transform 0.4s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
