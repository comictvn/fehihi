import React from 'react';
import styles from './index.module.css';

export interface FAQSectionProps {
  questions: { question: string; answer: string; isImportant?: boolean }[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ questions }) => {
  return (
    <div className={styles.faqSection}>
      {questions.map((q, index) => (
        <div key={index} className={styles.faqItem}>
          <p className={q.isImportant ? styles.importantQuestion : styles.question}>{q.question}</p>
          <p className={styles.answer}>{q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
