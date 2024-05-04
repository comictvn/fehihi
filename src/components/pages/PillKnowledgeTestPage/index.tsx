import React from 'react';
import { useTranslation } from 'react-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionCounter from '@components/atoms/QuestionCounter';
import QuestionBox from '@components/atoms/QuestionBox';
import DiagramInfo from '@components/atoms/DiagramInfo';
import AnswerButtons from '@components/molecules/AnswerButtons';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const progress = 5; // 5%
  const currentQuestion = 1;
  const totalQuestions = 20;
  const questionText = t('pillKnowledgeTest.question');
  const diagramInfoText = t('pillKnowledgeTest.diagramInfo');
  const answers = [
    t('pillKnowledgeTest.answer1'),
    t('pillKnowledgeTest.answer2'),
    t('pillKnowledgeTest.answer3'),
    t('pillKnowledgeTest.answer4'),
  ];

  return (
    <div className={styles.pageContainer}>
      <ProgressBar progress={progress} />
      <QuestionCounter current={currentQuestion} total={totalQuestions} />
      <QuestionBox>
        <p>{questionText}</p>
      </QuestionBox>
      <DiagramInfo text={diagramInfoText} />
      <AnswerButtons answers={answers} />
    </div>
  );
};

export default PillKnowledgeTestPage;
