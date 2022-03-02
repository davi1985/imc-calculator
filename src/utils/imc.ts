export type IMCLevel = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: [number, number];
  yourImc?: number;
};

export const levels: IMCLevel[] = [
  {
    title: 'Magreza',
    color: '#96a3ab',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: '#0ead69',
    icon: 'up',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: '#e2b036',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: '#c3423f',
    icon: 'down',
    imc: [30.1, 99],
  },
];

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
