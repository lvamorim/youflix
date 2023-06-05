import { createContext } from 'react';
import usePath from 'hooks/usePath';
import { 
  validateVideoTitle, 
  validateVideoURL, 
  validateVideoCategory, 
  validateVideoDescription 
} from 'models/videosValidations';
import { 
  validateCategoryName,
  validateCategoryDescription,  
  validateCategoryColor 
} from 'models/categoriesValidations';

const Validations = createContext();

const ValidationsProvider = ({ children }) => {
  const { newVideo, newCategory } = usePath();

  const validations = {
    title: validateVideoTitle,
    url: validateVideoURL,
    category: validateVideoCategory,
    description: newVideo ? validateVideoDescription : newCategory && validateCategoryDescription,
    name: validateCategoryName,
    color: validateCategoryColor,
  };
  
  return (
    <Validations.Provider value={validations}>
      {children}
    </Validations.Provider>
  );
};

export { Validations, ValidationsProvider };
