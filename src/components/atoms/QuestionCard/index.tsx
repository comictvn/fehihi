import React from 'react';
import styles from './index.module.css';

interface QuestionCardProps {
  question: string;
  children?: React.ReactNode;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, children }) => {
  return (
    <div className={styles.QuestionCard}>
      <p className={styles.QuestionText}>( )に当てはまるのは？</p>
      <p className={styles.QuestionBoldText}>{question}</p>
      {children}
    </div>
  );
};

export default QuestionCard;
