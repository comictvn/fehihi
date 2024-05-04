import React from 'react';
import ProgressBar from '@components/atoms/ProgressBar';
import QuestionBox from '@components/atoms/QuestionBox';
import AnswerButtonsGroup from '@components/molecules/AnswerButtonsGroup';
import styles from './index.module.css';

interface PillKnowledgeTestPageProps {
  progress: number;
  question: string;
  answers: string[];
  onAnswerClick: (answer: string) => void;
}

const PillKnowledgeTestPage: React.FC<PillKnowledgeTestPageProps> = ({
  progress,
  question,
  answers,
  onAnswerClick,
}) => {
  return (
    <div className={styles.PillKnowledgeTestPage}>
      <div className={styles.Header}>
        <button className={styles.BackButton}>
          <img src="https://studio.jitera.app/no.png" alt="Back" />
        </button>
        <div className={styles.QuestionCounter}>1/20</div>
      </div>
      <ProgressBar progress={progress} />
      <QuestionBox>{question}</QuestionBox>
      <div className={styles.DiagramInfo}>with diagram 16:9</div>
      <AnswerButtonsGroup answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default PillKnowledgeTestPage;
