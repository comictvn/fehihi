import React from 'react'
import Button from '../../atoms/Button'
import QuestionCard from '../../molecules/QuestionCard'
import styles from './index.module.css'

const PillKnowledgeTestPage: React.FC = () => {
  return (
    <div className={styles.PillKnowledgeTestPage}>
      <header className={styles.header}>
        <Button iconSrc="https://studio.jitera.app/no.png" alt="Back" />
        <div className={styles.progress}>1/20</div>
      </header>
      <QuestionCard
        title="ピル知識テスト"
        content="Enter the text of the test question here."
        withDiagram
      />
      <div className={styles.answers}>
        <Button>Answer 1 text</Button>
        <Button>Answer 2 text</Button>
        <Button>Answer 3 text</Button>
        <Button>Answer 4 text</Button>
      </div>
    </div>
  )
}

export default PillKnowledgeTestPage
