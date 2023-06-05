import GetData from 'services/getData';
import useNewData from 'hooks/useNewData';
import maxLength from 'models/maxLength';
import { TextField, MenuItem, TableRow, TableCell, Button } from '@mui/material';
import Form from 'components/Form';
import DataPreview from 'components/Form/DataPreview';
import TableBase from 'components/Table';
import Thumbnail from 'components/Thumbnail';
import TableControls from 'components/Table/Controls';

const VideoRegistration = () => {
  const { videos, categories } = GetData();
  const { 
    data, 
    errors, 
    handleValidations, 
    handleChange, 
    handleSubmit, 
    handleClear 
  } = useNewData();

  const styles = {
    thumbnailCell: {
      minWidth: 150, 
      maxWidth: 300, 
    },

    titleCell: {
      minWidth: 150, 
    },

    descriptionCell: {
      minWidth: 300, 
    },

    categoryButton: {
      color: 'inherit !important', 
    },
  };

  const showPreview = data.title && data.url && data.category;

  const ifHasCategories = categories.length;

  return (
  <>
    <Form submit={handleSubmit} clear={handleClear}>
      <TextField 
        label='Título' 
        name='title' 
        value={data.title} 
        onChange={handleChange} 
        required 
        inputProps={maxLength.videoTitle} 
        error={!errors.title.valid} 
        helperText={errors.title.message} 
        onKeyDown={(event) => handleValidations(event, 'onKeyDown')} 
        onBlur={(event) => handleValidations(event, 'onBlur')} 
      />
      <TextField 
        type='url' 
        label='Link do vídeo' 
        name='url' 
        value={data.url} 
        onChange={handleChange} 
        required 
        error={!errors.url.valid} 
        helperText={errors.url.message} 
        onBlur={handleValidations} 
      />
      <TextField 
        select 
        label='Escolha uma categoria' 
        name='category' 
        value={data.category} 
        onChange={handleChange} 
        required 
        error={!errors.category.valid} 
        helperText={errors.category.message} 
        onBlur={handleValidations} 
        >
        {ifHasCategories ?
          categories.map((category) => 
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          )
          :
          <MenuItem value=''>
            <em>Nenhuma categoria cadastrada.</em>
          </MenuItem>
        }
      </TextField>
      <TextField 
        label='Descrição' 
        name='description' 
        value={data.description} 
        onChange={handleChange} 
        multiline 
        rows={4} 
        inputProps={maxLength.videoDescription} 
        error={!errors.description.valid} 
        helperText={errors.description.message} 
        onKeyDown={handleValidations} 
      />
      {showPreview && 
        <DataPreview 
          title={data.title} 
          description={data.description} 
          url={data.url} 
          category={data.category} 
        />
      }
    </Form>
    <TableBase>
      {categories.map((category) => 
        videos.map((video) => video.category === category.name 
        /* getting the color and rendering the videos per category */ &&
        <TableRow key={video.id}>
          <TableCell align='center' sx={styles.thumbnailCell}>
            <Thumbnail url={video.url} category={video.category} />
          </TableCell>
          <TableCell align='center'>
            <Button disabled component='span' variant='contained' 
              sx={{ 
                backgroundColor: `${category.color} !important`, 
                ...styles.categoryButton 
              }} 
              >
              {video.category}
            </Button>
          </TableCell>
          <TableCell sx={styles.titleCell}>{video.title}</TableCell>
          <TableCell sx={styles.descriptionCell}>{video.description}</TableCell>
          <TableControls id={video.id} />
        </TableRow>
      ))}
    </TableBase>
  </>
  );
};

export default VideoRegistration;
