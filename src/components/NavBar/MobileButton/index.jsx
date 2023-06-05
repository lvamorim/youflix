import theme from 'styles';
import useMedia from 'hooks/useMediaQueries';
import useButtonNav from 'hooks/useButtonNav';
import { Toolbar, Button } from '@mui/material';

const MobileButton = () => {
  const { isMobile } = useMedia();
  const { to, label } = useButtonNav();

  const styles = {
    bar: {
      backgroundColor: theme.palette.primary.main, 
      position: 'sticky', 
      bottom: 0, 
      minHeight: 0, 
      p: 0, 
    }, 

    button: {
      minHeight: theme.spacing(6), 
    },
  };

  return (
    isMobile &&
    <Toolbar sx={styles.bar}>
      <Button variant='contained' href={to} fullWidth sx={styles.button}>
        {label}
      </Button>
    </Toolbar>
  );
};

export default MobileButton;
