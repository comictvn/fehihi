import React from 'react';
import styles from './index.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  borderRadius?: string;
}

const Input: React.FC<InputProps> = ({ borderRadius = '20px', ...props }) => {
  return (
    <input
      className={styles.input}
      style={{ borderRadius }}
      {...props}
    />
  );
};

export default Input;
