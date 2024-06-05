import React from 'react';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation();

  return (
    <div className={styles.PillKnowledgeTestPage}>
      <div className={styles.Header}>
        <button className={styles.BackButton}>
          <img src="https://studio.jitera.app/no.png" alt={t('pillKnowledgeTestPage.back')} />
        </button>
        <div className={styles.QuestionCounter}>{t('pillKnowledgeTestPage.questionCounter', { current: 1, total: 20 })}</div>
      </div>
      <ProgressBar progress={progress} />
      <QuestionBox>{question}</QuestionBox>
      <div className={styles.DiagramInfo}>{t('pillKnowledgeTestPage.diagramInfo')}</div>
      <AnswerButtonsGroup answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default PillKnowledgeTestPage;
