import React from 'react';
import styles from './index.module.css';

interface TitleBoxProps {
  title: string;
  subtitle: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.TitleBox}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Subtitle}>{subtitle}</div>
    </div>
  );
};

export default TitleBox;
