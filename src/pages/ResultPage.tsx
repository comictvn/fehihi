import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ResultPage from '@components/pages/ResultPage'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
      seo: {
        title: 'Result Page',
        description: 'View your results on this page.',
      },
    },
  }
}

export default ResultPage