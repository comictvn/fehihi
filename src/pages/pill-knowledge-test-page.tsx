import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PillKnowledgeTestPage from 'src/components/pages/PillKnowledgeTestPage';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'example', '404', '500', 'pillKnowledgeTestPage'])),
      // Add any additional props required for the page here
    },
  };
}

export default PillKnowledgeTestPage;
