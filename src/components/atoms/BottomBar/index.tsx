import React from 'react';
import styles from './index.module.css';

export interface BottomBarProps {
  children: React.ReactNode;
}

const BottomBar: React.FC<BottomBarProps> = ({ children }) => {
  return <div className={styles.bottomBar}>{children}</div>;
};

export default BottomBar;
