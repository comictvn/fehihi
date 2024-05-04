import React from 'react';
import styles from './index.module.css';

export interface QuestionCounterProps {
  current: number;
  total: number;
}

const QuestionCounter: React.FC<QuestionCounterProps> = ({ current, total }) => {
  return (
    <div className={styles.questionCounter}>
      {current}/{total}
    </div>
  );
};

export default QuestionCounter;
