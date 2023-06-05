import { useContext, useState } from 'react';
import GetData from 'services/getData';
import AddData from 'services/addData';
import { Validations } from 'contexts/Validations';
import usePath from './usePath';
import useErrors from './useErrors';

const useNewData = () => {
  const { videos, categories } = GetData();
  const { newVideo, newCategory } = usePath();
  const validations = useContext(Validations);
  const [errors, handleValidations, isValid] = useErrors(validations);
  const addData = AddData();

  const initialData = () => {
    let initialData = {};

    if (newVideo) {
      initialData = {
        id: '',
        url: '',
        title: '',
        description: '',
        category: '',
      };
    }

    if (newCategory) {
      initialData = {
        id: '',
        name: '',
        description: '',
        color: '#000000',
      };
    }

    return initialData;
  };

  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    const setId = () => {
      const ifNoEntries = !videos.length || !categories.length;
      
      const prevIds = (newVideo ? videos : newCategory ? categories : null).map((item) => item.id);

      const highestId = Math.max(...prevIds);

      const id = ifNoEntries ? 1 : highestId + 1;

      return id;
    };

    setData((prevData) => 
    ({
      ...prevData, 
      id: setId(), 
      [event.target.name]: event.target.value, 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.description) {
      data.description = 
        `Nenhuma descrição disponível para ${
          newVideo ? 'este vídeo' : 
          newCategory ? 'esta categoria' : ''
        }.`
      ;
    }

    if (data.color === '#000000') {
      handleValidations(
        { target: 
          { 
            name: 'color', 
            value: data.color 
          } 
        }, 'onSubmit'
      );

      return;
    }

    if (isValid()) {
      await addData(data);
      setData(initialData);
    }
  };

  const handleClear = () => {
    setData(initialData);
  };

  return { data, errors, handleValidations, handleChange, handleSubmit, handleClear };
};

export default useNewData;
