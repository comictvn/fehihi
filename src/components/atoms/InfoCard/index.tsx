import React from 'react';
import styles from './index.module.css';

export interface InfoCardProps {
  backgroundColor: string;
  borderRadius: string;
  imageUrl: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ backgroundColor, borderRadius, imageUrl, text }) => {
  return (
    <div className={styles.infoCard} style={{ background: backgroundColor, borderRadius }}>
      <img src={imageUrl} alt="" className={styles.infoImage} />
      <span className={styles.infoText}>{text}</span>
    </div>
  );
};

export default InfoCard;
