import React from 'react';
import { useTranslation } from 'react-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionBox from '@components/atoms/QuestionBox';
import DiagramPlaceholder from '@components/atoms/DiagramPlaceholder';
import AnswerButtons from '@components/molecules/AnswerButtons';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const progress = 25; // This should be dynamic based on the actual progress
  const questionText = t('pillKnowledgeTest.questionText');
  const answers = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  const handleAnswerClick = (answer: string) => {
    // Handle answer click event
    console.log(answer);
  };

  return (
    <div className={styles.pageContainer}>
      <ProgressBar progress={progress} />
      <QuestionBox>{questionText}</QuestionBox>
      <DiagramPlaceholder />
      <AnswerButtons answers={answers} onAnswerClick={handleAnswerClick} />
    </div>
  );
};

export default PillKnowledgeTestPage;
