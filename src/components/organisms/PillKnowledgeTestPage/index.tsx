import React from 'react';
import HeaderWithProgress from '../../organisms/HeaderWithProgress';
import QuestionCard from '../../molecules/QuestionCard';
import Button from '../../atoms/Button';
import styles from './index.module.css';

const PillKnowledgeTestPage: React.FC = () => {
  return (
    <div className={styles.pillKnowledgeTestPage}>
      <HeaderWithProgress progress={1} total={20} />
      <div className={styles.questionSection}>
        <div className={styles.title}>ピル知識テスト</div>
        <QuestionCard
          question="正解は、3〜6ヶ月です。"
          answer="ピルの効果は、'毎日'ではなく'クーポン'ごとに発揮されます。"
        />
      </div>
      <div className={styles.answersSection}>
        <QuestionCard
          question="PMS・生理痛はほぼ3ヶ月、ニキビ改善は半年が目安です。"
          answer="即効性はないですが、根本のホルモンの波を整理調整しているのがピルというお薬の特徴です。"
        />
      </div>
      <div className={styles.navigation}>
        <Button buttonType="primary">次へ</Button>
      </div>
    </div>
  );
};

export default PillKnowledgeTestPage;
