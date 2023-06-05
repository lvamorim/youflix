import GetData from 'services/getData';
import usePath from './usePath';

const useButtonNav = () => {
  const { categories } = GetData();
  const { home, newVideo, newCategory } = usePath();

  const pages = {
    home: {
      label: 'Página inicial', 
      href: '/', 
    },
    
    video: {
      label: 'Novo vídeo', 
      href: 'new-video', 
    },

    category: {
      label: 'Nova categoria', 
      href: 'new-category', 
    },
  };

  let to;
  let label;

  const ifHasCategories = categories.length !== 0;

  switch (true) {
    case home && ifHasCategories: 
      to = pages.video.href;
      label = pages.video.label;
      break;

    case home && !ifHasCategories: 
      to = pages.category.href;
      label = pages.category.label;
      break;

    case newVideo: 
      to = pages.category.href;
      label = pages.category.label;
      break;

    case newCategory: 
      to = pages.video.href;
      label = pages.video.label;
      break;
    
    default: 
      break;
  };

  return { to, label };
};

export default useButtonNav;
