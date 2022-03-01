import styles from './styles.module.scss';

import logoImg from '../../assets/imc.png';

export const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={logoImg} alt="IMC Logomarca" />

        <span>IMC Calculator</span>
      </div>
    </header>
  );
};
