import { useContext } from 'react';
import { FetchStatus } from 'contexts/FetchStatus';
import APIURL from './APIURL';

const AddData = () => {
  const { setFetch, setVideos, setCategories } = useContext(FetchStatus);
  const { endpoint } = APIURL();

  const addData = async (data) => {
    try {
      setFetch({ method: 'POST', status: 'loading' });

      const response = await fetch(`${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add data.');
      }

      const result = await response.json();

      setVideos((prevVideos) => [...prevVideos, result]);
      setCategories((prevCategories) => [...prevCategories, result]);

      setFetch({ method: 'POST', status: 'success' });
    }
    
    catch (error) {
      console.log(error);

      setFetch({ method: 'POST', status: 'error' });
    }
  };
  
  return addData;
}

export default AddData;
