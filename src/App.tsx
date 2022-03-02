import { useState } from 'react';

import { calculateIMC, IMCLevel, levels } from './utils/imc';

import { Header } from './components/Header';
import { RightSide } from './components/RightSide';
import { LeftSide } from './components/LeftSide';

import styles from './App.module.scss';
import { toast, ToastContainer } from 'react-toastify';

export const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<IMCLevel | null>(null);

  type CustomNotifyProps = {
    message: string;
    type: 'success' | 'error';
  };

  const notify = ({ message, type }: CustomNotifyProps) =>
    toast.info(message, {
      closeButton: true,
      theme: 'colored',
      type: type,
      autoClose: 3000,
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });

  const handleCalculateIMC = () => {
    if (!heightField || !weightField) {
      notify({ message: 'Preencha todos os campos.', type: 'error' });
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
