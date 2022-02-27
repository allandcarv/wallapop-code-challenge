import styled from 'styled-components';

export const FavoritesModalContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin: auto;
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
  }
`;
