import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PillKnowledgeTestPage from '@components/pages/PillKnowledgeTestPage';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'example'])),
      // Add any additional props required for the page here
    },
  };
}

export default PillKnowledgeTestPage;
