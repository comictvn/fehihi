import React from 'react';
import { useTranslation } from 'next-i18next';
import Button from '@components/atoms/Button';
import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.title}>{t('pill_knowledge_test.title')}</div>
        <div className={styles.subtitle}>{t('pill_knowledge_test.subtitle')}</div>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://studio.jitera.app/no.png" alt={t('pill_knowledge_test.character')} className={styles.characterImage} />
        <div className={styles.pageIndicator}>1/20</div>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.answerLabel}>A</div>
        <div className={styles.correctAnswer}>{t('pill_knowledge_test.correct_answer')}</div>
        <div className={styles.additionalInfo}>{t('pill_knowledge_test.additional_info')}</div>
        <div className={styles.additionalInfo}>{t('pill_knowledge_test.more_info')}</div>
      </div>
      <Button>{t('pill_knowledge_test.next_button')}</Button>
    </div> 
  );
};

export default PillKnowledgeTestPage;
