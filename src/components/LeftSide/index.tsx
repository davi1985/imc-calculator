import styles from './styles.module.scss';
import { useIMC } from '../../hooks/useIMC';
import { Input } from '../Input';
import { Button } from '../Button';

export const LeftSide = () => {
  const {
    showItem,
    heightField,
    weightField,
    setHeightField,
    setWeightField,
    handleCalculateIMC,
  } = useIMC();

  return (
    <div className={styles.leftside}>
      <h1>Calcule o seu IMC</h1>

      <p>
        IMC é a sigla para o Índice de Massa Corpórea, parâmetro adotoado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </p>

      <Input
        showItem={showItem}
        setValue={setHeightField}
        value={heightField}
        placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
      />

      <Input
        showItem={showItem}
        setValue={setWeightField}
        value={weightField}
        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
      />

      <Button />
    </div>
  );
};
