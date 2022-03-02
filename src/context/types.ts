import { IMCLevel } from '../utils/imc';

export type IMCContextData = {
  heightField: number;
  weightField: number;
  setHeightField: React.Dispatch<React.SetStateAction<number>>;
  setWeightField: React.Dispatch<React.SetStateAction<number>>;
  showItem: IMCLevel | null;
  setShowItem: React.Dispatch<React.SetStateAction<IMCLevel | null>>;
  handleCalculateIMC: () => React.ReactText | undefined;
  handleBack: () => void;
};
