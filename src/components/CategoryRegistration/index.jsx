import GetData from 'services/getData';
import useNewData from 'hooks/useNewData';
import maxLength from 'models/maxLength';
import { TextField, TableRow, TableCell, Button } from '@mui/material';
import Form from 'components/Form';
import DataPreview from 'components/Form/DataPreview';
import TableBase from 'components/Table';
import TableControls from 'components/Table/Controls';

const CategoryRegistration = () => {
  const { categories } = GetData();
  const { 
    data, 
    errors, 
    handleValidations, 
    handleChange, 
    handleSubmit, 
    handleClear 
  } = useNewData();

  const styles = {
    descriptionCell: {
      minWidth: 500, 
    },

    categoryButton: {
      color: 'inherit !important', 
    },

    colorPreview: {
      color: 'transparent !important', 
      minWidth: 0, 
      p: 0, 
    },
  };

  const showPreview = data.name && data.color;

  return (
  <>
    <Form submit={handleSubmit} clear={handleClear}>
      <TextField 
        label='Nome' 
        name='name' 
        value={data.name} 
        onChange={handleChange} 
        required 
        inputProps={maxLength.categoryName} 
        error={!errors.name.valid} 
        helperText={errors.name.message} 
        onKeyDown={event => handleValidations(event, 'onKeyDown')} 
        onBlur={event => handleValidations(event, 'onBlur')} 
      />
      <TextField 
        label='Descrição' 
        name='description' 
        value={data.description} 
        onChange={handleChange} 
        multiline 
        rows={4} 
        inputProps={maxLength.categoryDescription} 
        error={!errors.description.valid} 
        helperText={errors.description.message} 
        onKeyDown={handleValidations} 
      />
      <TextField 
        type='color' 
        label='Cor' 
        name='color' 
        value={data.color} 
        onChange={handleChange} 
        required 
        error={!errors.color.valid} 
        helperText={errors.color.message} 
        onBlur={handleValidations} 
      />
      {showPreview &&
        <DataPreview 
          name={data.name} 
          description={data.description} 
          color={data.color} 
        />
      }
    </Form>
    <TableBase>
      {categories.map(category => 
        <TableRow key={category.id}>
          <TableCell>
            <Button disabled component='span' variant='contained' 
              sx={{ 
                backgroundColor: `${category.color} !important`, 
                ...styles.categoryButton 
              }} 
              >
              {category.name}
            </Button>
          </TableCell>
          <TableCell sx={styles.descriptionCell}>{category.description}</TableCell>
          <TableCell align='center'>
            <Button disabled component='div' 
              sx={{ 
                backgroundColor: `${category.color}`, 
                ...styles.colorPreview  
              }}
              >
              Cor
            </Button>
          </TableCell>
          <TableControls id={category.id}/>
        </TableRow>
      )}
    </TableBase>
  </>
  );
};

export default CategoryRegistration;
