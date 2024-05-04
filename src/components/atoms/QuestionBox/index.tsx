import React from 'react';
import styles from './index.module.css';

export interface QuestionBoxProps {
  children: React.ReactNode;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ children }) => {
  return (
    <div className={styles.questionBox}>
      {children}
    </div>
  );
};

export default QuestionBox;
