import { useContext } from 'react';
import { FetchStatus } from 'contexts/FetchStatus';
import APIURL from './APIURL';

const DeleteData = () => {
  const { setFetch, setVideos, setCategories } = useContext(FetchStatus);
  const { endpoint } = APIURL();

  const deleteData = async (id) => {
    try {
      setFetch({ method: 'DELETE', status: 'loading' });

      const response = await fetch(`${endpoint + id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data.');
      }

      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
      setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
      
      setFetch({ method: 'DELETE', status: 'success' });
    }
    
    catch (error) {
      console.log(error);
      
      setFetch({ method: 'DELETE', status: 'error' });
    }
  };

  return deleteData;
};

export default DeleteData;
