import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { FetchStatus } from 'contexts/FetchStatus';
import useMedia from 'hooks/useMediaQueries';
import { Alert, Container } from '@mui/material';
import NotFound from 'pages/NotFound';
import NavBar from 'components/NavBar';
import MobileButton from 'components/NavBar/MobileButton';

const Content = () => {
  const { ifGETError, showAlert, fetchAlert, alertColor } = useContext(FetchStatus);
  const { isMobile } = useMedia();

  const styles = {
    main: {
      display: 'flex', 
      flexDirection: 'column', 
      gap: 6, 
      pt: 12, 
      pb: 20, 
      minHeight: isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 64px)', 
    },
  };

  return (
  <>
    {ifGETError ?
    <NotFound />
    :
  <>
    <NavBar header />
    <Container component='main' sx={styles.main}>
      {showAlert && <Alert severity={alertColor} variant='filled'>{fetchAlert}</Alert>}
      <Outlet />
    </Container>
    <MobileButton />
    <NavBar footer />
  </>
    }
  </>
  );
};

export default Content;
