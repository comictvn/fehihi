import React from 'react';
import { useTranslation } from 'next-i18next';

import ProgressBar from '@components/atoms/ProgressBar';
import QuestionCard from '@components/atoms/QuestionCard';
import DiagramInfo from '@components/atoms/DiagramInfo';
import AnswerButton from '@components/atoms/AnswerButton';

import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  // Dummy data for demonstration purposes
  const progress = 25; // This should be dynamic based on the actual progress
  const question = "Enter the text of the test question here.";
  const diagramInfoLines = ["with diagram", "16:9"];
  const answers = ["Answer 1 text", "Answer 2 text", "Answer 3 text", "Answer 4 text"];

  return (
    <div className={styles.pageContainer}>
      <ProgressBar progress={progress} />
      <QuestionCard question={question} />
      <DiagramInfo textLines={diagramInfoLines} />
      <div className={styles.answerButtons}>
        {answers.map((text, index) => (
          <AnswerButton key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default PillKnowledgeTestPage;
