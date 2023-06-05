import GetData from 'services/getData';
import usePath from 'hooks/usePath';
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Card, Typography } from '@mui/material';
import { videoHeader, categoryHeader } from '../../models/tableHeader';

const TableBase = ({ children }) => {
  const { videos, categories } = GetData();
  const { newVideo, newCategory } = usePath();

  const header = newVideo ? videoHeader : newCategory ? categoryHeader : null;
  const ifHasEntries = videos.length && categories.length;
  const message = 
    newVideo ? 'Nenhum vídeo cadastrado.' : 
    newCategory ? 'Nenhuma categoria cadastrada.' : null;

  return (
  <>
    {ifHasEntries ? 
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {header.map(cell => 
              <TableCell key={cell.title} align={cell.align}>
                {cell.title}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
    :
    <Card>
      <Typography variant='h6' align='center' py={2}>
        {message}
      </Typography>
    </Card>
    }
  </>
  );
};

export default TableBase;
