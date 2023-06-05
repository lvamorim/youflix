import usePath from 'hooks/usePath';

const APIURL = () => {
  const { newVideo, newCategory } = usePath();

  const url = 'http://192.168.1.15:5000';

  const db = {
    videos: '/videos/',
    categories: '/categories/',
  };

  const videosEndpoint = url + db.videos;
  const categoriesEndpoint = url + db.categories;
  
  const pathEndpoint = newVideo ? db.videos : newCategory ? db.categories : null;
  const endpoint = url + pathEndpoint;

  return { videosEndpoint, categoriesEndpoint, endpoint};
};

export default APIURL;
