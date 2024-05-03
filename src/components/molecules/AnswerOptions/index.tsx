import React from 'react';
import Button from '../../atoms/Button';
import styles from './index.module.css';

interface AnswerOptionsProps {
  answers: string[];
  onAnswerSelected: (answer: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answers, onAnswerSelected }) => {
  return (
    <div className={styles.AnswerOptionsContainer}>
      {answers.map((answer, index) => (
        <Button
          key={index}
          className={styles.AnswerButton}
          onClick={() => onAnswerSelected(answer)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default AnswerOptions;
