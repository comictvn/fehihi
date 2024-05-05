import React from 'react';
import styles from './index.module.css';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={onBack}>
        <img src="https://studio.jitera.app/no.png" alt="Back" className={styles.backIcon} />
      </button>
      <div className={styles.title}>{title}</div>
      <div className={styles.placeholder} />
    </div>
  );
};

export default Header;
