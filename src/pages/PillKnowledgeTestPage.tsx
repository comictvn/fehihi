import React from 'react';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PillKnowledgeTestPage from '@components/pages/PillKnowledgeTestPage';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pillKnowledgeTestPage'])),
      // Add other props if needed
    },
  };
}

export default PillKnowledgeTestPage;
