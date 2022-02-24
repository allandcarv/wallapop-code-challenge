import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  height: 10rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--blue);
  border-radius: 0.5rem;
  background-color: var(--light-gray);

  & + article {
    margin-top: 1rem;
  }

  section.image {
    width: 20%;
    height: 100%;
    position: relative;
  }

  section.data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    width: 80%;
    height: 100%;
    line-height: 1.5rem;

    p.description {
      display: inline-block;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 4.5rem;
    }

    p.price {
      font-family: 'Roboto Bold', sans-serif;
    }
  }

  section.actions {
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
  }
`;
