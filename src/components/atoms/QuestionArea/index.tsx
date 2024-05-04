import React from 'react';
import styles from './index.module.css';

export interface QuestionAreaProps {
  question: string;
  withDiagram?: boolean;
}

const QuestionArea: React.FC<QuestionAreaProps> = ({ question, withDiagram }) => {
  return (
    <div className={styles.container}>
      <div className={styles.questionBox}>
        <p>{question}</p>
      </div>
      {withDiagram && (
        <div>
          <div className={styles.diagramLabel}>with diagram</div>
          <div className={styles.diagram}></div>
        </div>
      )}
    </div>
  );
};

export default QuestionArea;
