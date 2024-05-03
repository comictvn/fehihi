import React from 'react';
import { useTranslation } from 'next-i18next';

import SearchBox from '@components/atoms/SearchBox';
import InfoCard from '@components/atoms/InfoCard';
import Paragraph from '@components/atoms/Paragraph';
import Button from '@components/atoms/Button';

import styles from './index.module.css';
import { useTranslation } from 'next-i18next';

const FAQSection: React.FC = () => {
  const { t } = useTranslation('faq');

  return (
    <div className={styles.pageContainer}>
      <SearchBox placeholder={t('faq.search_placeholder')} />
      <div className={styles.infoCardContainer}>
        <InfoCard
          backgroundColor="#FFF3F2"
          borderRadius="10px"
          imageUrl="https://studio.jitera.app/no.png"
          text={t('faq.info_card_text_1')}
        />
        <InfoCard
          backgroundColor="#EFF3FF"
          borderRadius="10px"
          imageUrl="https://studio.jitera.app/no.png"
          text={t('faq.info_card_text_2')}
        />
      </div>
      <div className={styles.paragraphContainer}>
        <Paragraph>{t('faq.paragraph_1')}</Paragraph>
        <Paragraph>{t('faq.paragraph_2')}</Paragraph>
      </div>
      <Button className={styles.learnMoreButton}>{t('faq.learn_more')}</Button>
    </div>
  );
};

export default FAQSection;
