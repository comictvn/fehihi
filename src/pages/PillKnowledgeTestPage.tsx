import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PillKnowledgeTestPage from '@components/pages/PillKnowledgeTestPage';
import { useRouter } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pillKnowledgeTest'])),
      seo: {
        title: 'Pill Knowledge Test',
        description: 'Test your knowledge about pills and their effects.',
      },
    }, 
  };
}

export default PillKnowledgeTestPage;
