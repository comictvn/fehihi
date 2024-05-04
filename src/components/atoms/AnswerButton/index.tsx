import React from 'react';
import styles from './index.module.css';

interface AnswerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.AnswerButton} {...rest}>
      {text}
    </button>
  );
};

export default AnswerButton;
