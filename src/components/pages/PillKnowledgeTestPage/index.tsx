import React from 'react';
import Header from '@components/atoms/Header';
import ProgressBar from '@components/atoms/ProgressBar';
import QuestionArea from '@components/atoms/QuestionArea';
import AnswerOptionsGrid from '@components/molecules/AnswerOptionsGrid';
import { useTranslation } from 'next-i18next';
import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for progress and options, replace with real data as needed
  const progress = 5; // 5% for example
  const question = t('pillKnowledgeTest.question');
  const additionalText = [t('pillKnowledgeTest.withDiagram'), t('pillKnowledgeTest.aspectRatio')];
  const options = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  return (
    <div className={styles.pageContainer}>
      <Header title={t('pillKnowledgeTest.headerTitle')} />
      <ProgressBar progress={progress} />
      <QuestionArea question={question} additionalText={additionalText} />
      <AnswerOptionsGrid options={options} />
    </div>
  );
};

export default PillKnowledgeTestPage;
