import React from 'react';
import styles from './index.module.css';

export interface QuestionCardProps {
  question: string;
  answer: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer }) => {
  return (
    <div className={styles.questionCard}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default QuestionCard;
