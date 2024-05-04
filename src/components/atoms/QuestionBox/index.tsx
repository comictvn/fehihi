import React from 'react';
import styles from './index.module.css';

interface QuestionBoxProps {
  children: React.ReactNode;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ children }) => {
  return (
    <div className={styles.QuestionBox}>
      <p className={styles.QuestionText}>{children}</p>
    </div>
  );
};

export default QuestionBox;
