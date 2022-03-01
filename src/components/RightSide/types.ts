import { IMCLevel } from '../../helpers/imc';

export type RightSideProps = {
  levels: IMCLevel[];
  handleBack: () => void;
  showItem: IMCLevel | null;
};
