import { GridItem } from '../GridItem';
import { RightSideProps } from './types';

import { IMCResult } from '../IMCResult';
import { useIMC } from '../../hooks/useIMC';

import styles from './styles.module.scss';

export const RightSide = ({ levels }: RightSideProps) => {
  const { showItem } = useIMC();

  return (
    <div className={styles.rightside}>
      {!showItem && (
        <div className={styles.grid}>
          {levels.map((item, key) => (
            <GridItem key={key} item={item} />
          ))}
        </div>
      )}

      <IMCResult />
    </div>
  );
};
