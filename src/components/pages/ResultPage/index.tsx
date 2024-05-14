import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';

import styles from './index.module.css';

function ResultPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('ResultPage.complete')}</h1>
      <p className={styles.description}>{t('ResultPage.thank_you')}</p>
      <div className={styles.card}>
        <img src="https://studio-next.jitera.app/no.png" alt={t('ResultPage.badge')} className={styles.badgeImage} />
        <div className={styles.badgeText}>
          <p className={styles.badgeTitle}>{t('ResultPage.knowledge_level')}</p>
          <h2 className={styles.badgeLevel}>{t('ResultPage.gold')}</h2>
        </div>
        <p className={styles.cardDescription}>
          {t('ResultPage.advice')}
        </p>
        <Button buttonType="review" className={styles.reviewButton}>
          {t('ResultPage.review_results')}
        </Button>
      </div>
      <div className={styles.scoreContainer}>
        <span>20</span>
        <span className={styles.score}>点</span>
        <span className={styles.scoreDivider}>/</span>
        <span className={styles.scoreTotal}>20</span>
      </div>
    </div>
  );
}

export default ResultPage;