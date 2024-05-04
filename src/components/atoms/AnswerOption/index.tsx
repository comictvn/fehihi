import React from 'react';
import Button from '../Button';
import styles from './index.module.css';

export interface AnswerOptionProps {
  text: string;
  onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text, onClick }) => {
  return (
    <Button className={styles.answerButton} onClick={onClick}>
      {text}
    </Button>
  );
};

export default AnswerOption;
