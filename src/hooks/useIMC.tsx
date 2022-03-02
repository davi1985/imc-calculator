import { useContext } from 'react';
import { IMCContext } from '../context/IMCProvider';

export const useIMC = () => {
  const context = useContext(IMCContext);

  return context;
};
