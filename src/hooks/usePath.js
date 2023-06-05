import { useLocation } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();

  const home = pathname === '/';
  const newVideo = pathname === '/new-video';
  const newCategory = pathname === '/new-category';

  return { home, newVideo, newCategory };
};

export default usePath;
