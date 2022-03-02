import { useState } from 'react';

import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

import { useToast } from './hooks/useToast';
import { calculateIMC, IMCLevel, levels } from './utils/imc';

import styles from './App.module.scss';

export const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<IMCLevel | null>(null);

  const { notify, ToastContainer } = useToast();

  const handleCalculateIMC = () => {
    if (!heightField || !weightField) {
      return notify({ message: 'Preencha todos os campos.', type: 'error' });
    }

    setShowItem(calculateIMC(heightField, weightField));

    notify({ message: 'IMC Calculado.', type: 'success' });
  };

  const handleBack = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <ToastContainer />

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
