import { useState } from 'react';

import { calculateIMC, IMCLevel, levels } from './helpers/imc';

import { Header } from './components/Header';
import { RightSide } from './components/RightSide';
import { LeftSide } from './components/LeftSide';

import styles from './App.module.scss';

export const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<IMCLevel | null>(null);

  const handleCalculateIMC = () => {
    if (!heightField || !weightField) {
      alert('Preencha todos os campos');
    }

    setShowItem(calculateIMC(heightField, weightField));
  };

  const handleBack = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <LeftSide
          handleCalculateIMC={handleCalculateIMC}
          heightField={heightField}
          weightField={weightField}
          setHeightField={setHeightField}
          setWeightField={setWeightField}
          showItem={showItem}
        />

        <RightSide
          handleBack={handleBack}
          levels={levels}
          showItem={showItem}
        />
      </div>
    </div>
  );
};
