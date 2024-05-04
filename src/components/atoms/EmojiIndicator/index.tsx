import React from 'react';
import styles from './index.module.css';

interface EmojiIndicatorProps {
  emoji: string;
  label: string;
}

const EmojiIndicator: React.FC<EmojiIndicatorProps> = ({ emoji, label }) => {
  return (
    <div className={styles.EmojiIndicator}>
      <span className={styles.Emoji}>{emoji}</span>
      <span className={styles.Label}>{label}</span>
    </div>
  );
};

export default EmojiIndicator;
