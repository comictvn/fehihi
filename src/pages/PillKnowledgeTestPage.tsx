import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PillKnowledgeTestPage from '@components/pages/PillKnowledgeTestPage';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['pillKnowledgeTest', 'common'])),
    },
  };
}

export default PillKnowledgeTestPage;
