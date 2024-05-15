import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FAQListPage from '@components/pages/FAQList'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
      seo: {
        title: 'FAQ List',
        description: 'Frequently Asked Questions',
      },
    },
  }
}

export default FAQListPage