import maxLength from './maxLength';

const validateCategoryName = (name, event) => {
  if (name.length >= maxLength.categoryName.maxLength && event === 'onKeyDown') {
    return { 
      valid: true, 
      message: `O nome deve conter no máximo ${maxLength.categoryName.maxLength} caracteres.`, 
    };
  }

  else if (!name && event === 'onBlur') {
    return { 
      valid: false, 
      message: 'Nenhum nome foi inserido. Por favor, insira um nome.', 
    };
  }

  return { valid: true, message: '' };
};

const validateCategoryDescription = (description) => {
  if (description.length >= maxLength.categoryDescription.maxLength) {
    return { 
      valid: true, 
      message: `A descrição deve conter no máximo ${maxLength.categoryDescription.maxLength} caracteres.`, 
    };
  }

  return { valid: true, message: '' };
};

const validateCategoryColor = (color) => {
  if (color === '#000000') {
    return { 
      valid: false, 
      message: 'Nenhuma cor selecionada. Por favor, selecione uma cor.', 
    };
  }
  
  return { valid: true, message: '' };
};

export { validateCategoryName, validateCategoryDescription, validateCategoryColor };
