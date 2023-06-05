import usePath from 'hooks/usePath';
import { FormControl, Typography } from '@mui/material';
import FormControls from './Controls';

const Form = ({ submit, clear, children }) => {
  const { newVideo, newCategory } = usePath();

  const title = newVideo ? 'Novo vídeo' : newCategory ? 'Nova categoria' : null;

  return (
    <form onSubmit={submit}>
      <FormControl fullWidth sx={{ gap: 4 }}>
        <Typography component='legend' variant='h4' align='center'>
          {title}
        </Typography>
        {children}
        <FormControls clear={clear} />
      </FormControl>
    </form>
  );
};

export default Form;
