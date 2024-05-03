import React from 'react';
import styles from './index.module.css';

interface QuestionCardProps {
  title: string;
  content: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, content }) => {
  return (
    <div className={styles.QuestionCard}>
      <div className={styles.QuestionCardTitle}>{title}</div>
      <div className={styles.QuestionCardContent}>{content}</div>
    </div>
  );
};

export default QuestionCard;
