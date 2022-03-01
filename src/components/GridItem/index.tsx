import styles from './styles.module.scss';
import { GridItemProps } from './types';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

export const GridItem = ({ item }: GridItemProps) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.icon}>
        <img src={item.icon === 'up' ? upImage : downImage} alt="" />
      </div>

      <h2>{item.title}</h2>

      {item.yourImc && (
        <p className={styles.yourImc}>
          Seu IMC é de <b>{item.yourImc.toFixed(2)}</b> kg/m².
        </p>
      )}

      <p>
        O IMC está entre <b>{item.imc[0]}</b> e <b>{item.imc[1]}</b>
      </p>
    </div>
  );
};
