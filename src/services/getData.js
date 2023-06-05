import { useContext, useEffect } from 'react';
import { FetchStatus } from 'contexts/FetchStatus';
import APIURL from './APIURL';

const GetData = () => {
  const { videos, setVideos, categories, setCategories, setFetch } = useContext(FetchStatus);
  const { videosEndpoint, categoriesEndpoint } = APIURL();

  useEffect(() => {
    const getData = async () => {
      try {
        const videosResponse = await fetch(`${videosEndpoint}`);
        const categoriesResponse = await fetch(`${categoriesEndpoint}`);
        
        if (!videosResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to get data.');
        }
        
        const videosResult = await videosResponse.json();
        const categoriesResult = await categoriesResponse.json();

        setVideos(videosResult);
        setCategories(categoriesResult);
      }

      catch (error) {
        console.log(error);

        setFetch({ method: 'GET', status: 'error' });
      }
    };

    return getData;
  }, [setFetch, videosEndpoint, categoriesEndpoint, setVideos, setCategories]);

  return { videos, categories };
};

export default GetData;
