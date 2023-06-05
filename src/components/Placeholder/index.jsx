import theme from 'styles';
import GetData from 'services/getData';
import useMedia from 'hooks/useMediaQueries';
import { Card, CardContent, Typography, Link } from '@mui/material';

const Placeholder = ({ start, video }) => {
  const { categories } = GetData();
  const { isMobile } = useMedia();

  const styles = {
    startCard: {
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translateX(-50%) translateY(-50%)', 
      width: isMobile ? '80%' : 'fit-content', 
    },

    videoCard: {
      aspectRatio: 16/9, 
      display: 'grid', 
      placeItems: 'center', 
    },
    
    link: {
      color: theme.palette.primary.main, 
    },
  };
  
  const ifNoVideo = video;
  const ifEmpty = !categories.length && start;

  let title;
  let text;
  let to;
  let label;

  switch (true) {
    case ifEmpty:
      title = 'Vamos começar!';
      text = 'Primeiro, adicione uma ';
      to = 'new-category';
      label = 'nova categoria';
      break;

    case ifNoVideo:
      title = 'Ótimo!';
      text = 'Agora, adicione um ';
      to = 'new-video';
      label = 'novo vídeo';
      break;
  
    default:
      break;
  }

  return (
    <Card sx={start ? styles.startCard : styles.videoCard}>
      <CardContent align='center'>
        <Typography variant='h5' mb={2}>{title}</Typography>
        <Typography>{text}
          <Link href={to} sx={styles.link}>{label}</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
};
 
export default Placeholder;
