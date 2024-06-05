import React from 'react';
import styles from './index.module.css';

interface DiagramInfoProps {
  text: string;
}

const DiagramInfo: React.FC<DiagramInfoProps> = ({ text }) => {
  return <div className={styles.DiagramInfo}>{text}</div>;
};

export default DiagramInfo;
