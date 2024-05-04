import React from 'react';
import styles from './index.module.css';

const DiagramPlaceholder: React.FC = () => {
  return (
    <div className={styles.DiagramPlaceholder}>
      <p className={styles.DiagramText}>with diagram</p>
      <p className={styles.DiagramSubtext}>16:9</p>
    </div>
  );
};

export default DiagramPlaceholder;
