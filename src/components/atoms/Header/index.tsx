import React from 'react';
import styles from './index.module.css';

interface HeaderProps {
  onBackClick?: () => void;
  pageIndicator: string;
}

const Header: React.FC<HeaderProps> = ({ onBackClick, pageIndicator }) => {
  return (
    <div className={styles.Header}>
      <button className={styles.BackButton} onClick={onBackClick}>
        <img src="https://studio.jitera.app/no.png" alt="Back" style={{ width: '24px', height: '24px' }} />
      </button>
      <div className={styles.PageIndicator}>{pageIndicator}</div>
    </div>
  );
};

export default Header;
