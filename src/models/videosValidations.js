import matchYouTubeRegex from './youTubeRegex';
import maxLength from './maxLength';

const validateVideoTitle = (title, event) => {
  if (title.length >= maxLength.videoTitle.maxLength && event === 'onKeyDown') {
    return { 
      valid: true, 
      message: `O título deve conter no máximo ${maxLength.videoTitle.maxLength} caracteres.`, 
    };
  }

  else if (!title && event === 'onBlur') {
    return { 
      valid: false, 
      message: 'Nenhum título foi inserido. Por favor, insira um título.', 
    };
  }

  return { valid: true, message: '' };
};

const validateVideoURL = (url) => {
  if (url && !matchYouTubeRegex(url)) {
    return { 
      valid: false, 
      message: 'Url inválida. Por favor, insira um link do YouTube.', 
    };
  }

  else if (!url) {
    return { 
      valid: false, 
      message: 'Nenhum link foi inserido. Por favor, insira um link do YouTube.', 
    };
  }

  return { valid: true, message: '' };
};

const validateVideoCategory = (category) => {
  if (!category) {
    return { 
      valid: false, 
      message: 'Nenhuma categoria selecionada. Por favor, selecione uma categoria.', 
    };
  }

  return { valid: true, message: '' };
};

const validateVideoDescription = (description) => {
  if (description.length >= maxLength.videoDescription.maxLength) {
    return { 
      valid: true, 
      message: `A descrição deve conter no máximo ${maxLength.videoDescription.maxLength} caracteres.`, 
    };
  }

  return { valid: true, message: '' };
};

export { 
  validateVideoTitle, 
  validateVideoURL, 
  validateVideoCategory, 
  validateVideoDescription 
};
