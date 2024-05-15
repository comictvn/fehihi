import React from 'react';
import styles from './index.module.css';
import { useTranslation } from 'next-i18next';

export interface FAQItemProps {
  number: number;
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ number, question }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.indicator}>
        <img src="https://studio-next.jitera.app/no.png" alt={t('FAQItem.indicatorAlt')} />
      </div>
      <div className={styles.content}>
        <span className={styles.number}>{number}.</span>
        <span className={styles.question}>{t(question)}</span>
      </div>
      <div className={styles.arrow}>
        <img src="https://studio-next.jitera.app/no.png" alt={t('FAQItem.arrowAlt')} />
      </div>
    </div>
  );
};

export default FAQItem;