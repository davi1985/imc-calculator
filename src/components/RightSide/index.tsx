import { GridItem } from '../GridItem';
import { RightSideProps } from './types';

import arrowBackImg from '../../assets/leftarrow.png';

import styles from './styles.module.scss';

export const RightSide = ({ levels, handleBack, showItem }: RightSideProps) => {
  return (
    <div className={styles.rightside}>
      {!showItem && (
        <div className={styles.grid}>
          {levels.map((item, key) => (
            <GridItem key={key} item={item} />
          ))}
        </div>
      )}

      {showItem && (
        <div className={styles.rightBig}>
          <button className={styles.rightArrow} onClick={handleBack}>
            <img src={arrowBackImg} />
          </button>

          <GridItem item={showItem} />
        </div>
      )}
    </div>
  );
};
