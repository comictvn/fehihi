import React from 'react';
import { useTranslation } from 'next-i18next';
import FAQItem from '@components/molecules/FAQItem';
import styles from './index.module.css';

const FAQList: React.FC = () => {
  const { t } = useTranslation();
  const faqData = [
    // This should be fetched from an API or imported from a constants file
    { number: 1, question: 'FAQList.timing_of_starting' },
    { number: 2, question: 'FAQList.how_to_take' },
    // ... add more FAQ items here
  ];

  return (
    <div className={styles.page_container}>
      {faqData.map((faq, index) => (
        <FAQItem key={index} number={faq.number} question={t(faq.question)} />
      ))}
    </div>
  );
};

export default FAQList;