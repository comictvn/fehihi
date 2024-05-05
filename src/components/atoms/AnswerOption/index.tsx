import React from 'react';
import styles from './index.module.css';

interface AnswerOptionProps {
  text: string;
  onClick?: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text, onClick }) => {
  return (
    <button className={styles.answerOption} onClick={onClick}>
      {text}
    </button>
  );
};

export default AnswerOption;
