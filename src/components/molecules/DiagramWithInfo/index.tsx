import React from 'react';
import styles from './index.module.css';

interface DiagramWithInfoProps {
  text: string;
  ratio: string;
}

const DiagramWithInfo: React.FC<DiagramWithInfoProps> = ({ text, ratio }) => {
  return (
    <div className={styles.DiagramWithInfo}>
      <div className={styles.DiagramText}>{text}</div>
      <div className={styles.DiagramRatio}>{ratio}</div>
    </div>
  );
};

export default DiagramWithInfo;
