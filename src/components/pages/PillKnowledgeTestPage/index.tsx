import React from 'react';
import { useTranslation } from 'react-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionArea from '@components/atoms/QuestionArea';
import AnswerOption from '@components/atoms/AnswerOption';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const question = t('pillKnowledgeTest.question');
  const answers = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  const handleAnswerClick = () => {
    // Placeholder for answer click handling
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>{t('pillKnowledgeTest.title')}</h1>
      </header>
      <ProgressBar progress={1} total={20} />
      <QuestionArea question={question} withDiagram />
      <div className={styles.answerOptions}>
        {answers.map((text, index) => (
          <AnswerOption key={index} text={text} onClick={handleAnswerClick} />
        ))}
      </div>
    </div>
  );
};

export default PillKnowledgeTestPage;
