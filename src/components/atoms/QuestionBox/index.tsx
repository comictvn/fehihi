import React from 'react';
import styles from './index.module.css';

export interface QuestionBoxProps {
  question: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question }) => {
  return (
    <div className={styles.questionBox}>
      <span>{question}</span>
    </div>
  );
};

export default QuestionBox;
