import React from 'react';
import styles from './index.module.css';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className={styles.Tag}>{children}</span>
  );
};

export default Tag;
