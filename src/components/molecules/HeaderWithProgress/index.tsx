import React from 'react';
import Button from '../../atoms/Button';
import ProgressBar from '@components/atoms/ProgressBar';
import styles from './index.module.css';

export interface HeaderWithProgressProps {
  progress: number;
  step: string;
  onBack: () => void;
}

const HeaderWithProgress: React.FC<HeaderWithProgressProps> = ({ progress, step, onBack }) => {
  return (
    <div className={styles.headerWithProgress}>
      <Button iconSrc="https://studio.jitera.app/no.png" onClick={onBack} />
      <span className={styles.step}>{step}</span>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default HeaderWithProgress;
