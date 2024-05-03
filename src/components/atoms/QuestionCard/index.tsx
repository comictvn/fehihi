import React from 'react';
import styles from './index.module.css';

interface QuestionCardProps {
  question: string;
  diagramText?: string;
  diagramSrc?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, diagramText, diagramSrc }) => {
  return (
    <div className={styles.QuestionCardContainer}>
      <span className={styles.QuestionCardText}>{question}</span>
      <div className={styles.QuestionCardContent}>
        <span className={styles.QuestionCardText}>Enter the text of the test question here.</span>
      </div>
      {diagramSrc && (
        <div className={styles.QuestionCardDiagram}>
          <span className={styles.QuestionCardDiagramText}>{diagramText}</span>
          <div className={styles.QuestionCardImageContainer}>
            <img src={diagramSrc} alt="Diagram" className={styles.QuestionCardImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
