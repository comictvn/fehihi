import React from 'react';
import styles from './index.module.css';

export interface ProgressBarProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
  const percentage = (progress / total) * 100;

  return (
    <div className={styles.container}>
      <span className={styles.emoji}>😊</span>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
      </div>
      <span className={styles.counter}>{`${progress}/${total}`}</span>
    </div>
  );
};

export default ProgressBar;
