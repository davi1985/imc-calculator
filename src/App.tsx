import { useContext, useState } from 'react';

import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

import { ToastContainer } from 'react-toastify';

import { levels } from './utils/imc';

import styles from './App.module.scss';
import { IMCContext } from './context/IMCProvider';
import { useIMC } from './hooks/useIMC';

export const App = () => {
  const {
    heightField,
    setHeightField,
    weightField,
    setWeightField,
    showItem,
    setShowItem,
    handleCalculateIMC,
    handleBack,
  } = useIMC();

  return (
    <div className={styles.main}>
      <ToastContainer />

      <Header />

      <div className={styles.container}>
        <LeftSide
          calculateIMC={handleCalculateIMC}
          heightField={heightField}
          weightField={weightField}
          setHeightField={setHeightField}
          setWeightField={setWeightField}
          showItem={showItem}
        />

        <RightSide back={handleBack} levels={levels} showItem={showItem} />
      </div>
    </div>
  );
};
