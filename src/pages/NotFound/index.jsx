import theme from 'styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Container, Stack, Typography, Button } from '@mui/material';
import Logo from 'components/Logo';

const NotFound = () => {
  const goBack = useNavigate();

  const styles = {
    centered: {
      display: 'grid', 
      gap: 4, 
      alignSelf: 'center', 
    },

    error404: {
      color: theme.palette.common.white, 
      fontWeight: 'bold', 
      textShadow: 
      `
        -0.05rem -0.05rem 0 ${theme.palette.primary.main},
        0.25rem 0.25rem 0 ${theme.palette.primary.main}
      `, 
    },
  };

  return (
    <Grid container component='main' minHeight='100vh'>
      <Container align='center' maxWidth='sm' sx={styles.centered}>
        <Logo large />
        <Stack>
          <Typography variant='h1' component='span' sx={styles.error404}>
            404
          </Typography>
          <Typography variant='h4' fontWeight='bold'>
            Página não encontrada
          </Typography>
        </Stack>
        <Typography variant='h6'>
          Desculpe, 
          a página que você está tentando acessar não existe 
          ou está temporariamente indisponível.
        </Typography>
        <Typography>
          Caso algo esteja quebrado, <strong>reporte o problema.</strong>
        </Typography>
        <Stack direction='row' justifyContent='center' spacing={2}>
          <Button variant='contained' onClick={() => goBack(-1)}>
            Voltar
          </Button>
          <Button 
            variant='contained' 
            color='secondary' 
            href='https://github.com/lvamorim' 
            target='_blank' 
            aria-label='Github de LV' 
            >
            Fale conosco
          </Button>
        </Stack>
      </Container>
    </Grid>
  );
};

export default NotFound;
