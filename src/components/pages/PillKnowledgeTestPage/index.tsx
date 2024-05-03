import React from 'react';
import { useTranslation } from 'react-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionCard from '@components/atoms/QuestionCard';
import AnswerOptions from '@components/molecules/AnswerOptions';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const progress = 20; // This should be dynamic based on the actual progress
  const question = t('pillKnowledgeTest.question');
  const answers = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  const handleAnswerSelected = (answer: string) => {
    // Handle answer selection
    console.log(answer);
  };

  return (
    <div className={styles.page_container}>
      <ProgressBar progress={progress} />
      <QuestionCard
        question={question}
        diagramText={t('pillKnowledgeTest.diagramText')}
        diagramSrc="https://studio.jitera.app/no.png"
      />
      <AnswerOptions answers={answers} onAnswerSelected={handleAnswerSelected} />
    </div>
  );
};

export default PillKnowledgeTestPage;
