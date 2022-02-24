import styled, { css } from 'styled-components';

import { IButtonComponent } from './Button.interface';

const buttonType = {
  fill: css`
    color: var(--light-gray);
    background-color: var(--blue);
  `,
  outline: css`
    color: var(--blue);
    background-color: transparent;
  `,
};

export const StyledButton = styled.button<IButtonComponent>`
  font-size: 1.5em;
  padding: 0.5em;
  border: 0.1em solid var(--blue);
  border-radius: 0.2em;
  transition: filter 0.4s;

  ${(props) => buttonType[props.customType]}

  &:hover {
    filter: brightness(90%);
  }
`;
