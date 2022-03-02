import { Dispatch, SetStateAction } from 'react';
import { IMCLevel } from '../../utils/imc-levels';

export type InputProps = {
  showItem: IMCLevel | null;
  value: number;
  placeholder: string;
  setValue: Dispatch<SetStateAction<number>>;
};
