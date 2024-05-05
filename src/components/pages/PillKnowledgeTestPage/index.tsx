import React from 'react'
import { useTranslation } from 'next-i18next'
import Button from '@components/atoms/Button'
import QuestionCard from '@components/molecules/QuestionCard'
import styles from './index.module.css'

const PillKnowledgeTestPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.pillKnowledgeTestPage}>
      <header className={styles.header}>
        <Button iconSrc="https://studio.jitera.app/no.png" title={t('pill_knowledge_test.back')} />
        <div className={styles.progress}>{t('pill_knowledge_test.progress', { current: 1, total: 20 })}</div>
      </header>
      <QuestionCard
        title={t('pill_knowledge_test.title')}
        content={t('pill_knowledge_test.question_content')}
        withDiagram
      />
      <div className={styles.answers}>
        <Button>{t('pill_knowledge_test.answer', { number: 1 })}</Button>
        <Button>{t('pill_knowledge_test.answer', { number: 2 })}</Button>
        <Button>{t('pill_knowledge_test.answer', { number: 3 })}</Button>
        <Button>{t('pill_knowledge_test.answer', { number: 4 })}</Button>
      </div>
    </div>
  )
}

export default PillKnowledgeTestPage
