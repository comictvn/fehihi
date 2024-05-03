import React from 'react';
import AnswerOption from '../../atoms/AnswerOption';
import styles from './index.module.css';

interface AnswerOptionsGridProps {
  options: string[];
}

const AnswerOptionsGrid: React.FC<AnswerOptionsGridProps> = ({ options }) => {
  return (
    <div className={styles.AnswerOptionsGrid}>
      {options.map((option, index) => (
        <AnswerOption key={index} text={option} />
      ))}
    </div>
  );
};

export default AnswerOptionsGrid;
