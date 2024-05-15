React from 'react';
import { useTranslation } from 'react-i18next'; // Updated import based on the patch
import Typography from '@components/atoms/Typography';
import Box from '@components/atoms/Box';
import Image from '@components/atoms/Image';
import Button from '@components/atoms/Button';
import styles from './index.module.css';

const ReflectionPage: React.FC = () => {
  const { t } = useTranslation();

  return ( // Space added before the parenthesis based on the patch
    <div className={styles.page_container}>
      <Typography variant="header" style={{ marginBottom: '24px' }}>
        {t('reflectionPage.header')}
      </Typography>
      <Typography variant="title" color="#FF6B6B" style={{ marginTop: '8px' }}>
        {t('reflectionPage.title')}
      </Typography>
      <Box variant="question" style={{ marginBottom: '24px' }}>
        <Typography variant="subtitle">{t('reflectionPage.questionLabel')}</Typography>
        <Typography variant="header" style={{ marginBottom: '16px' }}>
          {t('reflectionPage.question')}
        </Typography>
        <Box variant="default" style={{ marginBottom: '16px' }}>
          <Typography variant="caption">1</Typography>
          <Typography variant="body" style={{ marginTop: '8px' }}>
            {t('reflectionPage.option1')}
          </Typography>
        </Box>
        <Box variant="default">
          <Typography variant="caption">2</Typography>
          <Typography variant="body" style={{ marginTop: '8px' }}>
            {t('reflectionPage.option2')}
          </Typography>
        </Box>
      </Box>
      <Box variant="answer" style={{ marginBottom: '24px' }}>
        <Typography variant="subtitle" color="#FF6B6B">
          {t('reflectionPage.answerLabel')}
        </Typography>
        <Typography variant="header" style={{ marginBottom: '16px' }}>
          {t('reflectionPage.correctAnswer')}
        </Typography>
        <Typography variant="body">
          {t('reflectionPage.answerExplanation')}
        </Typography>
      </Box>
      <div className={styles.mascot_container}>
        <Typography variant="title" color="#1F8EFA" style={{ marginBottom: '8px' }}> {/* Style added based on the patch */}
          {t('reflectionPage.mascotText')} {/* Text key updated based on the patch */}
        </Typography>
        <Image src="https://studio-next.jitera.app/no.png" alt="Mascot" width="50px" height="50px" style={{ marginTop: '8px' }} />
      </div>
      <div className={styles.cta_button_container}>
        <Button buttonType="primary" style={{ padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', width: '100%' }}> {/* Style updated based on the patch */}
          {t('reflectionPage.backButton')}
        </Button> {/* Space added before the closing tag based on the patch */}
      </div>
    </div>
  );
};

export default ReflectionPage;