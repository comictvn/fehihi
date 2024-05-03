import React from 'react';
import styles from './index.module.css';

interface AnswerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={styles.AnswerButton} {...rest}>
      {children}
    </button>
  );
};

export default AnswerButton;
