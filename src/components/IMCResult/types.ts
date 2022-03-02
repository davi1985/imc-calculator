import { IMCLevel } from '../../utils/imc-levels';

export type IMCResultProps = {
  back: () => void;
  showItem: IMCLevel | null;
};
