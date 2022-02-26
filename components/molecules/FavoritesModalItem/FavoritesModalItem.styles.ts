import styled from 'styled-components';

import BREAKPOINTS from '../../../styles/breakpoints';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  height: 5rem;
  padding-top: 0.5rem;

  & + li {
    border-top: 0.1rem solid var(--blue);
    margin-top: 0.5rem;
  }

  section.image {
    width: 30%;
    height: 100%;
    position: relative;
  }

  h3 {
    width: 60%;
    padding: 0 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  svg {
    fill: var(--red);
    cursor: pointer;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    height: 8rem;
  }
`;
