import styled from 'styled-components';

export const StyledButton = styled.button`
  position: fixed;
  bottom: 20%;
  right: 0.5rem;
  padding: 0.3rem;
  border: 0.1rem solid var(--blue);
  border-radius: 50%;
  background-color: var(--light-gray);
  transition: background-color 0.2s;

  svg {
    fill: var(--blue);
    transition: fill 0.2s;
  }

  &:hover {
    background-color: var(--blue);

    svg {
      fill: var(--light-gray);
    }
  }
`;
