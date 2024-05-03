import type { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PillKnowledgeTestPage from 'src/components/pages/PillKnowledgeTestPage'

export async function getStaticProps(context: NextPageContext) {
  const { locale = 'en' } = context || {}
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pill_knowledge_test'])),
      seo: {
        title: 'Pill Knowledge Test',
        description: 'Test your knowledge about pills and medications.',
      },
    },
  }
}

export default PillKnowledgeTestPage
