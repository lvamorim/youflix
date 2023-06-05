import theme from 'styles';
import thumbnail from 'models/thumbnail';
import useMedia from 'hooks/useMediaQueries';

const Banner = ({ url }) => {
  const src = thumbnail(url);
  const { isDesktop } = useMedia();

  const styles = {
    banner: {
      position: 'absolute', 
      left: 0, 
      transform: 
        isDesktop ? `translateY(calc(${theme.spacing(6)} * -1))` : 
        `translateY(calc(${theme.spacing(11)} * -1))`, 
      width: '100%', 
      maxHeight: theme.spacing(65), 
      objectFit: 'cover', 
      filter: 'blur(3px) brightness(50%)', 
      zIndex: -9999, 
    },
  };

  return (
    <img src={src} alt='Banner miniatura do vídeo' style={styles.banner} />
  );
};
 
export default Banner;
