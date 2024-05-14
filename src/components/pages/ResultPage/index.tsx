import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const ResultPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <img src="https://studio-next.jitera.app/no.png" alt={t('ResultPage.menuIcon')} />
        <img src="https://studio-next.jitera.app/no.png" alt={t('ResultPage.closeIcon')} />
      </div>
      <div className={styles.title}>
        <span className={styles.titleMain}>{t('ResultPage.complete')}</span>
        <span className={styles.titleSub}>{t('ResultPage.wellDone')}</span>
      </div>
      <div className={styles.badgeContainer}>
        <img src="https://studio-next.jitera.app/no.png" alt={t('ResultPage.badge')} />
        <span className={styles.badgeTitle}>{t('ResultPage.pillKnowledgeLevel')}</span>
        <span className={styles.badgeLevel}>{t('ResultPage.gold')}</span>
        <p className={styles.badgeDescription}>{t('ResultPage.firstTip')}</p>
        <p className={styles.badgeDescription}>{t('ResultPage.secondTip')}</p>
        <div className={styles.reviewButton}>
          <span className={styles.reviewButtonText}>{t('ResultPage.reviewTestResults')}</span>
        </div>
      </div>
      <div className={styles.score}>
        <span className={styles.scoreValue}>20</span>
        <span className={styles.scoreText}>{t('ResultPage.points')}</span>
        <span className={styles.scoreDivider}>/</span>
        <span className={styles.scoreTotal}>20</span>
      </div>
      <div className={styles.confettiContainer}>
        {/* Confetti images would be placed here with absolute positioning */}
      </div>
    </div>
  );
};

export default ResultPage;