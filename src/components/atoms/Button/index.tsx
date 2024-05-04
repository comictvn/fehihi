import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
