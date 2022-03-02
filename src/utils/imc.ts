import { IMCLevel, levels } from './imc-levels';

export const calculateIMC = (
  height: number,
  weight: number,
): IMCLevel | null => {
  const imc = weight / Math.pow(height, 2);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let newLevels: IMCLevel = { ...levels[i] };
      newLevels.yourImc = imc;

      return newLevels;
    }
  }

  return null;
};
