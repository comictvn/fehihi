import React from 'react';
import styles from './index.module.css';

interface DiagramInfoProps {
  textLines: string[];
}

const DiagramInfo: React.FC<DiagramInfoProps> = ({ textLines }) => {
  return (
    <div className={styles.DiagramInfo}>
      {textLines.map((line, index) => (
        <p key={index} className={styles.DiagramInfoParagraph}>{line}</p>
      ))}
    </div>
  );
};

export default DiagramInfo;
