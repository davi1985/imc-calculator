import { GridItem } from '../GridItem';
import arrowBackImg from '../../assets/leftarrow.png';

import styles from './styles.module.scss';
import { useIMC } from '../../hooks/useIMC';

export const IMCResult = () => {
  const { showItem, handleBack } = useIMC();

  return (
    showItem && (
      <div className={styles.rightBig}>
        <button className={styles.rightArrow} onClick={handleBack}>
          <img src={arrowBackImg} />
        </button>

        <GridItem item={showItem} />
      </div>
    )
  );
};
