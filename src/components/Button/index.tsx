import { useIMC } from '../../hooks/useIMC';

import styles from './styles.module.scss';

export const Button = () => {
  const { handleCalculateIMC, showItem } = useIMC();

  return (
    <button
      className={styles.button}
      onClick={handleCalculateIMC}
      disabled={!!showItem}
    >
      Calcular
    </button>
  );
};
