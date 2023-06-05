import theme from 'styles';
import GetData from 'services/getData';
import useMedia from 'hooks/useMediaQueries';
import { Box, CardContent, Button, Typography } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayArrow';
import Banner from '../Banner';
import Thumbnail from 'components/Thumbnail';

const VideoCard = ({ selectedVideo }) => {
  const { categories } = GetData();
  const { isDesktop } = useMedia();

  const styles = {
    card: {
      display: isDesktop && 'flex', 
      gap: isDesktop && 4, 
      textAlign: !isDesktop && 'center', 
      mt: 2, 
      mb: !isDesktop ? 3 : 6, 
      py: !isDesktop && 4, 
    },
    
    cardContent: {
      width: '100%', 
      p: 0, 
    },

    categoryButton: {
      fontSize: theme.spacing(3), 
    },

    thumbnailBox: {
      position: 'relative', 
      width: '100%', 
    },

    playButton: {
      borderRadius: '100%', 
      color: 'inherit', 

      centered: {
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translateX(-50%) translateY(-50%)', 
      },
      
      small: {
        fontSize: theme.spacing(6), 
      },

      large: {
        fontSize: `clamp(${theme.spacing(5)}, 5vw, ${theme.spacing(10)})`, 
      },
    },
  };

  const videoURL = selectedVideo.url;
  const playButtonLabel = 'Assistir vídeo';

  return (
    categories.map((category) => 
    (selectedVideo && selectedVideo.category === category.name) && 
    /* prevents card from rendering according to categories entries */ 
      <Box key={selectedVideo.id} sx={styles.card}>
        <Banner url={selectedVideo.url} />
        {isDesktop ? 
        <>
          <CardContent sx={styles.cardContent}>
            <Button variant='contained' href='new-category' 
              sx={{ 
                backgroundColor: `
                  ${(selectedVideo.category === category.name) && category.color} 
                  !important
                `, 
                ...styles.categoryButton 
              }} 
              >
              {selectedVideo.category}
            </Button>
            <Typography variant='h4' mt={4} mb={2}>{selectedVideo.title}</Typography>
            <Typography>{selectedVideo.description}</Typography>
          </CardContent>
          <Box sx={styles.thumbnailBox}>
            <Button href={videoURL} target='_blank' aria-label={playButtonLabel} 
              sx={{ 
                backgroundColor: `
                  ${(selectedVideo.category === category.name) && category.color} 
                  !important
                `, 
                ...styles.playButton, 
                ...styles.playButton.centered 
              }}
              >
              <PlayIcon sx={styles.playButton.large} />
            </Button>
            <Thumbnail url={selectedVideo.url} category={selectedVideo.category} />
          </Box>
        </>
        :
        <>
          <Typography variant='h5' mb={2}>{selectedVideo.title}</Typography>
          <Typography mb={6}>{selectedVideo.description}</Typography>
          <Button href={videoURL} target='_blank' aria-label={playButtonLabel} 
            sx={{ 
              backgroundColor: `
                ${(selectedVideo.category === category.name) && category.color} 
                !important
              `, 
              ...styles.playButton 
            }}
            >
            <PlayIcon sx={styles.playButton.small} />
          </Button>
        </>
        }
      </Box>
    )
  );
};

export default VideoCard;
