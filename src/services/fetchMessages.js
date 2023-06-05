import usePath from 'hooks/usePath';

const FetchMessages = (method, status) => {
  const { newVideo, newCategory } = usePath();

  const isMethod = {
    get: method === 'GET', 
    post: method === 'POST', 
    put: method === 'PUT', 
    delete: method === 'DELETE', 
  };

  const loadingAction = 
    isMethod.post ? 'Adicionando' : 
    isMethod.put ? 'Editando' : 
    isMethod.delete ? 'Deletando' : '';
  
  const action = 
    isMethod.post ? 'adicionar' : 
    isMethod.put ? 'editar' : 
    isMethod.delete ? 'deletar' : '';

  const isStatus = {
    loading: status === 'loading', 
    error: status === 'error', 
    success: status === 'success', 
  };
  
  const path = newVideo ? ' vídeo' : newCategory ? ' categoria' : '';
  
  let message = '';

  if (!isMethod.get) {
    switch (true) {
      case isStatus.loading: 
        message = `${loadingAction + path}...`;
        break;
    
      case isStatus.error: 
        message = `Erro ao ${action + path}. Tente novamente.`;
        break;
    
      case isStatus.success: 
        message = `Sucesso ao ${action + path}!`;
        break;
      
      default: 
        break;
    }
  }
  
  return message;
};

export default FetchMessages;
