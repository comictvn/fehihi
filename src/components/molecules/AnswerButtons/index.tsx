import React from 'react';
import Button from '../../atoms/Button';
import styles from './index.module.css';

interface AnswerButtonsProps {
  answers: string[];
  onAnswerClick: (answer: string) => void;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ answers, onAnswerClick }) => {
  return (
    <div className={styles.AnswerButtons}>
      {answers.map((answer, index) => (
        <Button
          key={index}
          className={styles.AnswerButton}
          onClick={() => onAnswerClick(answer)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default AnswerButtons;
