import theme from 'styles';
import GetData from 'services/getData';
import thumbnail from 'models/thumbnail';
import { CardMedia } from '@mui/material';

const Thumbnail = ({ url, category }) => {
  const { categories } = GetData();

  const src = thumbnail(url);

  const styles = {
    thumbnail: {
      aspectRatio: 16/9, 
      borderStyle: 'solid', 
      borderRadius: theme.spacing(0.4), 
    },
  };
  
  return (
  <>
    {categories.map((categories) => categories.name === category &&
      <CardMedia key={src} component='img' src={src} alt='Miniatura do vídeo' 
        sx={{ 
          borderColor: categories.color, 
          ...styles.thumbnail
        }} 
      />
    )}
  </>
  );
};

export default Thumbnail;
