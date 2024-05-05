import React from 'react';
import AnswerOption from '../../atoms/AnswerOption';
import styles from './index.module.css';

interface AnswerOptionsGridProps {
  options: string[];
  onOptionClick?: (option: string) => void;
}

const AnswerOptionsGrid: React.FC<AnswerOptionsGridProps> = ({ options, onOptionClick }) => {
  return (
    <div className={styles.answerOptionsGrid}>
      {options.map((option, index) => (
        <AnswerOption key={index} text={option} onClick={() => onOptionClick && onOptionClick(option)} />
      ))}
    </div>
  );
};

export default AnswerOptionsGrid;
