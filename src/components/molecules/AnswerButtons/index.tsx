import React from 'react';
import Button from '../../atoms/Button';
import styles from './index.module.css';

export interface AnswerButtonProps {
  text: string;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ text }) => {
  return (
    <Button className={styles.answerButton}>{text}</Button>
  );
};

export interface AnswerButtonsProps {
  answers: string[];
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ answers }) => {
  return (
    <div className={styles.answerButtons}>
      {answers.map((answer, index) => (
        <AnswerButton key={index} text={answer} />
      ))}
    </div>
  );
};

export default AnswerButtons;
