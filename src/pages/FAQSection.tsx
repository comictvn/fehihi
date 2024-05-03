import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FAQSectionPage from '@components/pages/FAQSection';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'faq'])),
      // seo: {
        title: 'FAQ - Your Company Name',
        description: 'Frequently Asked Questions',
      },
    },
    revalidate: 10, // In seconds
  };
}

export default FAQSectionPage;
