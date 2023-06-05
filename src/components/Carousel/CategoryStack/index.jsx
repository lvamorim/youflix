import useMedia from 'hooks/useMediaQueries';
import { Stack, Button, Typography } from '@mui/material';

const CategoryStack = ({ selectedVideo, buttonColor, buttonLabel, description }) => {
  const { isDesktop } = useMedia();

  const setInvisible = selectedVideo && (isDesktop && selectedVideo.category === buttonLabel);

  const styles = {
    hide: {
      display: setInvisible && 'none', 
    },

    categoryButton: {
      backgroundColor: `${buttonColor} !important`, 
    },
  };

  return (
    <Stack direction='row' alignItems='center' spacing={2} mb={2} sx={styles.hide}>
      <Button variant='contained' href='new-category' sx={styles.categoryButton}>
        {buttonLabel}
      </Button>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default CategoryStack;
