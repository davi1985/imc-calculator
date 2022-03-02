import { createContext, ReactNode, useState } from 'react';
import { useCustomToast } from '../hooks/useCustomToast';
import { calculateIMC, IMCLevel } from '../utils/imc';
import { IMCContextData } from './types';

export const IMCContext = createContext({} as IMCContextData);

export const IMCProvider = ({ children }: { children: ReactNode }) => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<IMCLevel | null>(null);

  const { notify } = useCustomToast();

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
    <IMCContext.Provider
      value={{
        heightField,
        weightField,
        setHeightField,
        setWeightField,
        showItem,
        setShowItem,
        handleCalculateIMC,
        handleBack,
      }}
    >
      {children}
    </IMCContext.Provider>
  );
};
