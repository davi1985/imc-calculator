import { InputProps } from './types';

import styles from './styles.module.scss';

export const Input = ({
  showItem,
  value,
  setValue,
  placeholder,
}: InputProps) => {
  return (
    <input
      className={styles.input}
      disabled={!!showItem}
      type="number"
      value={value > 0 ? value : ''}
      placeholder={placeholder}
      onChange={(e) => setValue(parseFloat(e.target.value))}
    />
  );
};
