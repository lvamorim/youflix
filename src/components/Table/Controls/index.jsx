import DeleteData from 'services/deleteData';
import { TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableControls = ({ id }) => {
  const deleteData = DeleteData();

  const handleEdit = () => {
    alert('Esta funcionalidade estará disponível em breve!');
  };

  const handleDelete = async () => {
    await deleteData(id);
  };

  return (
  <>
    <TableCell align='center'>
      <IconButton onClick={handleEdit}><EditIcon /></IconButton>
    </TableCell>
    <TableCell align='center'>
      <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
    </TableCell>
  </>
  );
};

export default TableControls;
