import React from 'react';
import { useTranslation } from 'react-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionCard from '@components/atoms/QuestionCard';
import DiagramInfo from '@components/atoms/DiagramInfo';
import AnswerOptionsGrid from '@components/molecules/AnswerOptionsGrid';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const progress = 25; // This should be dynamic based on the actual progress
  const questionTitle = t('pillKnowledgeTest.questionTitle');
  const questionContent = t('pillKnowledgeTest.questionContent');
  const diagramInfoText = t('pillKnowledgeTest.diagramInfoText');
  const answerOptions = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  return (
    <div className={styles.pageContainer}>
      <ProgressBar progress={progress} />
      <QuestionCard title={questionTitle} content={questionContent} />
      <DiagramInfo text={diagramInfoText} />
      <AnswerOptionsGrid options={answerOptions} />
    </div>
  );
};

export default PillKnowledgeTestPage;
