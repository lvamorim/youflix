import useMedia from 'hooks/useMediaQueries';
import useButtonNav from 'hooks/useButtonNav';
import { Stack, Button } from '@mui/material';

const FormControls = ({ clear }) => {
  const { isMobile, isTablet } = useMedia();
  const { to, label } = useButtonNav();

  return (
    <Stack direction='row' justifyContent='space-between'>
      <Stack direction='row' spacing={2} width={isMobile? '100%' : 'initial'}>
        <Button type='submit' variant='contained' fullWidth={isMobile}>
          Salvar
        </Button>
        <Button type='reset' variant='contained' color='secondary' fullWidth={isMobile} onClick={clear}>
          Limpar
        </Button>
      </Stack>
      {isTablet &&
        <Button variant='contained' href={to} fullWidth={isMobile}>
          {label}
        </Button>
      }
    </Stack>
  );
};

export default FormControls;
