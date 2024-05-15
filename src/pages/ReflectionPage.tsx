import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReflectionPage from '@components/pages/ReflectionPage';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'reflectionPage'])),
    },
  };
}

export default ReflectionPage;