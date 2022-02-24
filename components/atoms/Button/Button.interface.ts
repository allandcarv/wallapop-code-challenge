import { ButtonHTMLAttributes } from 'react';

import { ButtonType } from './Button.type';

export interface IButtonComponent
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  customType: ButtonType;
}
