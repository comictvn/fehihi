import React from 'react';
import styles from './index.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props you need here
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
