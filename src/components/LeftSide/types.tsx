import { IMCLevel } from '../../helpers/imc';

export type LeftSideProps = {
  showItem: IMCLevel | null;
  heightField: number;
  weightField: number;
  setHeightField: (value: number) => void;
  setWeightField: (value: number) => void;
  handleCalculateIMC: () => void;
};
