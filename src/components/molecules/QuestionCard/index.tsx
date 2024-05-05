import React from 'react'
import styles from './index.module.css'

interface QuestionCardProps {
  title: string
  content: string
  withDiagram?: boolean
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, content, withDiagram }) => {
  return (
    <div className={styles.questionCard}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.content}>{content}</p>
      </div>
      {withDiagram && <div className={styles.diagramPlaceholder}>with diagram 16:9</div>}
    </div>
  )
}

export default QuestionCard
