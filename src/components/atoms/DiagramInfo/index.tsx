import React from 'react';
import styles from './index.module.css';

export interface DiagramInfoProps {
  text: string;
}

const DiagramInfo: React.FC<DiagramInfoProps> = ({ text }) => {
  return (
    <div className={styles.diagramInfo}>
      {text}
    </div>
  );
};

export default DiagramInfo;
