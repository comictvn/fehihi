import React from 'react';
import styles from './index.module.css';

interface AnswerOptionProps {
  text: string;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text }) => {
  return <div className={styles.AnswerOption}>{text}</div>;
};

export default AnswerOption;
