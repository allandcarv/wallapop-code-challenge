import { SelectHTMLAttributes } from 'react';

export interface ISelectComponent
  extends SelectHTMLAttributes<HTMLSelectElement> {
  values: string[];
  texts?: string[];
}
