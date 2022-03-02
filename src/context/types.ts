import { Dispatch, SetStateAction } from 'react';
import { IMCLevel } from '../utils/imc';

export type IMCContextData = {
  heightField: number;
  weightField: number;
  setHeightField: Dispatch<SetStateAction<number>>;
  setWeightField: Dispatch<SetStateAction<number>>;
  showItem: IMCLevel | null;
  setShowItem: Dispatch<SetStateAction<IMCLevel | null>>;
  handleCalculateIMC: () => React.ReactText | undefined;
  handleBack: () => void;
};
