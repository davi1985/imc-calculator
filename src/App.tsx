import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

import { ToastContainer } from 'react-toastify';

import { levels } from './utils/imc-levels';

import { useIMC } from './hooks/useIMC';

import styles from './App.module.scss';

export const App = () => {
  const {
    heightField,
    setHeightField,
    weightField,
    setWeightField,
    showItem,
    handleCalculateIMC,
    handleBack,
  } = useIMC();

  return (
    <div className={styles.main}>
      <ToastContainer />

      <Header />

      <div className={styles.container}>
        <LeftSide />

        <RightSide levels={levels} />
      </div>
    </div>
  );
};
