import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from '@components/atoms/Header';
import QuestionCard from '@components/molecules/QuestionCard';
import DiagramWithInfo from '@components/molecules/DiagramWithInfo';
import AnswerOptionsGrid from '@components/molecules/AnswerOptionsGrid';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes, should be replaced with actual data fetching logic
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

  return ( // The components used below should be replaced with actual project components
    <div className={styles.pageContainer}>
      <Header onBackClick={() => {}} pageIndicator="1/20" />
      <QuestionCard title={questionTitle} content={questionContent} />
      <DiagramWithInfo text={diagramInfoText} ratio="16:9" />
      <AnswerOptionsGrid options={answerOptions} />
    </div>
  );
};

export default PillKnowledgeTestPage;
