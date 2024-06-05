import React from 'react';
import styles from './index.module.css';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.ProgressBarContainer}>
      <div className={styles.ProgressBar} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
