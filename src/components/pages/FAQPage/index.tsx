import React from 'react';
import { useTranslation } from 'next-i18next';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import BottomBar from '@components/atoms/BottomBar';
import FAQSection from '@components/organisms/FAQSection';
import styles from './index.module.css';

const FAQPage: React.FC = () => {
  const { t } = useTranslation();

  const questions = [
    { question: t('faq.question1'), answer: t('faq.answer1') },
    { question: t('faq.question2'), answer: t('faq.answer2') },
    { question: t('faq.question3'), answer: t('faq.answer3'), isImportant: true },
    { question: t('faq.question4'), answer: t('faq.answer4'), isImportant: true },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inputContainer}>
        <Input placeholder={t('faq.search_placeholder')} />
      </div>
      <FAQSection questions={questions} />
      <div className={styles.infoContainer}>
        <p>{t('faq.info1')}</p>
        <p>{t('faq.info2')}</p>
        <p>{t('faq.info3')}</p>
      </div>
      <BottomBar>
        <Button buttonType="primary">{t('faq.close_button')}</Button>
      </BottomBar>
    </div>
  );
};

export default FAQPage;
