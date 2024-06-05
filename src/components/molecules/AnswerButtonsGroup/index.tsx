import React from 'react';
import AnswerButton from '../../atoms/AnswerButton';
import styles from './index.module.css';

interface AnswerButtonsGroupProps {
  answers: string[];
  onAnswerClick: (answer: string) => void;
}

const AnswerButtonsGroup: React.FC<AnswerButtonsGroupProps> = ({ answers, onAnswerClick }) => {
  return (
    <div className={styles.AnswerButtonsGroup}>
      {answers.map((answer, index) => (
        <AnswerButton key={index} onClick={() => onAnswerClick(answer)}>
          {answer}
        </AnswerButton>
      ))}
    </div>
  );
};

export default AnswerButtonsGroup;
