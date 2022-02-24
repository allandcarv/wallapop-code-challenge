import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);

  p {
    color: var(--light-gray);

    a {
      color: var(--light-gray);
      transition: color 0.4s;

      &:hover {
        color: var(--gray);
      }
    }
  }
`;
