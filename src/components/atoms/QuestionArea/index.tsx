import React from 'react';
import styles from './index.module.css';

interface QuestionAreaProps {
  question: string;
  additionalText?: string[];
}

const QuestionArea: React.FC<QuestionAreaProps> = ({ question, additionalText }) => {
  return (
    <div className={styles.questionArea}>
      <div className={styles.question}>{question}</div>
      {additionalText && additionalText.map((text, index) => (
        <div key={index} className={styles.additionalText}>{text}</div>
      ))}
    </div>
  );
};

export default QuestionArea;
