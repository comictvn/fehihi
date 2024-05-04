import React from 'react';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';

export interface HeaderWithProgressProps {
  progress: number;
  total: number;
}

const HeaderWithProgress: React.FC<HeaderWithProgressProps> = ({ progress, total }) => {
  return (
    <div className={styles.headerWithProgress}>
      <div className={styles.emoji}>✅</div>
      <ProgressBar progress={(progress / total) * 100} />
      <div className={styles.progressText}>{`${progress}/${total}`}</div>
    </div>
  );
};

export default HeaderWithProgress;
