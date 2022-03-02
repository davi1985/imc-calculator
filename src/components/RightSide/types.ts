import { IMCLevel } from '../../utils/imc';

export type RightSideProps = {
  levels: IMCLevel[];
  back: () => void;
  showItem: IMCLevel | null;
};
