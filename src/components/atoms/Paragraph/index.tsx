import React from 'react';
import styles from './index.module.css';

export interface ParagraphProps {
  color?: string;
  fontSize?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ color = '#8E8E93', fontSize = '14px', children }) => {
  return (
    <p className={styles.paragraph} style={{ color, fontSize }}>
      {children}
    </p>
  );
};

export default Paragraph;
