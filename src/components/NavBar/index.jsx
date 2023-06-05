import theme from 'styles';
import usePath from 'hooks/usePath';
import useMedia from 'hooks/useMediaQueries';
import { keyframes, AppBar, Toolbar, Container, Stack, Button, Typography, Link } from '@mui/material';
import StarIcon from '@mui/icons-material/StarRate';
import Logo from 'components/Logo';

const NavBar = ({ header, footer }) => {
  const { home } = usePath();
  const { isTablet } = useMedia();

  const spin = keyframes`
    to {
      transform: rotate(2turn);
    };
  `

  const styles = {
    button: {
      '&.MuiButton-outlined': { 
        border: `${theme.spacing(0.2)} solid currentColor`, 
        color: 'inherit', 
      }, 
    },

    star: {
      fontSize: '75%', 
      animation: `${spin} 4s linear infinite`, 
    },
  };

  return (
    <AppBar component={header ? 'header' : 'footer'} position={footer && 'static'}>
      <Toolbar>
        <Container>
          <Stack direction='row' spacing={2} justifyContent='space-between'>
          {header ?
          <>
            <Logo />
            {(home && isTablet) &&
              <Button variant='outlined' href='new-video' sx={styles.button}>
                Novo vídeo
              </Button>
            }
          </>
          :
          <>
            <Typography variant='body2'>©2023 — YouFlix</Typography>
            <Typography variant='body2'>Desenvolvido por {''}
              <Link href='https://github.com/lvamorim' aria-label='Github de LV'>
                LV<StarIcon sx={styles.star} />
              </Link>
            </Typography>
          </>
          }
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
