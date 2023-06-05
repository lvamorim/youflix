import theme from 'styles';
import usePath from 'hooks/usePath';
import useMedia from 'hooks/useMediaQueries';
import { Card, Box, CardContent, Typography, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Thumbnail from 'components/Thumbnail';

const DataPreview = ({ title, url, category, description, name, color }) => {
  const { newVideo, newCategory } = usePath();
  const { isTablet, isDesktop } = useMedia();

  const styles = {
    card: {
      display: isDesktop && 'flex', 
      width: isTablet ? '70%' : '100%', 
    },

    thumbnailBox: {
      display: isDesktop && 'grid', 
      placeItems: isDesktop && 'center', 
      width: '100%', 
    },

    cardContent: {
      position: 'relative', 
      width: isDesktop ? '200%' : '100%', 
    },

    cardCaption: {
      position: 'absolute', 
      bottom: theme.spacing(2), 
    },

    infoIcon: {
      color: theme.palette.primary.main, 
      fontSize: 'inherit', 
      verticalAlign: 'text-top', 
    },

    categoryButton: {
      backgroundColor: `${color} !important`, 
      color: 'inherit !important', 
    },
  };

  const isDescription = description ? description : 
    `Nenhuma descrição disponível para 
      ${newVideo ? 'este vídeo' : newCategory ? 'esta categoria' : ''}.
    `;
  
  return (
    <>
      {newVideo ?
        <Card sx={styles.card}>
          <Box p={2} sx={styles.thumbnailBox}>
            <Thumbnail url={url} category={category} />
          </Box>
          <CardContent sx={styles.cardContent}>
            <Typography variant='h5' mb={2}>{title}</Typography>
            <Typography mb={8}>{isDescription}</Typography>
            <Typography variant='caption' sx={styles.cardCaption}>
              <InfoIcon sx={styles.infoIcon} /> 
              {''} Não é o vídeo desejado? <strong>Insira outro link.</strong>
            </Typography>
          </CardContent>
        </Card>
      :
      newCategory ?
        <Card>
          <CardContent>
            <Button disabled component='span' variant='contained' sx={styles.categoryButton}>
              {name}
            </Button>
            <Typography mt={2}>{isDescription}</Typography>
          </CardContent>
        </Card>
      :
      null
      }
    </>
  );
};

export default DataPreview;
