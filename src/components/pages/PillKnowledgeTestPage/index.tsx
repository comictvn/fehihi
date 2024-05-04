import React from 'react';
import { useTranslation } from 'next-i18next';
import HeaderWithProgress from '../../molecules/HeaderWithProgress';
import ProgressBar from '@components/atoms/ProgressBar';
import QuestionBox from '@components/atoms/QuestionBox';
import Button from '@components/atoms/Button';
import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <HeaderWithProgress
        progress={5}
        step={t('pillKnowledgeTestPage.step', { current: 1, total: 20 })}
        onBack={() => {}}
      />
      <ProgressBar progress={5} />
      <QuestionBox question={t('pillKnowledgeTestPage.question')} />
      <div className={styles.answers}>
        <Button>{t('pillKnowledgeTestPage.answer1')}</Button>
        <Button>{t('pillKnowledgeTestPage.answer2')}</Button>
        <Button>{t('pillKnowledgeTestPage.answer3')}</Button>
        <Button>{t('pillKnowledgeTestPage.answer4')}</Button>
      </div>
    </div>
  );
};

export default PillKnowledgeTestPage;
