import type { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FAQPage from 'src/components/pages/FAQPage'

export async function getStaticProps(context: NextPageContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'faq'])),
      seo: {
        title: 'FAQ - Your Company Name',
        description: 'Frequently Asked Questions',
      },
    },
  }
}

export default FAQPage
