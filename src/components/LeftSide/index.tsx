import { LeftSideProps } from './types';

import styles from './styles.module.scss';

export const LeftSide = ({
  showItem,
  heightField,
  weightField,
  setHeightField,
  setWeightField,
  handleCalculateIMC,
}: LeftSideProps) => {
  return (
    <div className={styles.leftside}>
      <h1>Calcule o seu IMC</h1>

      <p>
        IMC é a sigla para o Índice de Massa Corpórea, parâmetro adotoado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </p>

      <input
        disabled={!!showItem}
        type="number"
        value={heightField > 0 ? heightField : ''}
        placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
        onChange={(e) => setHeightField(parseFloat(e.target.value))}
      />

      <input
        disabled={!!showItem}
        type="number"
        value={weightField > 0 ? weightField : ''}
        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
        onChange={(e) => setWeightField(parseFloat(e.target.value))}
      />

      <button onClick={handleCalculateIMC} disabled={!!showItem}>
        Calcular
      </button>
    </div>
  );
};
