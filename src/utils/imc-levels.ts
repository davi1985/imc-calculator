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
