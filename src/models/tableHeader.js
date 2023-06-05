const headerControls = [
  {
    title: 'Editar', 
    align: 'center', 
  },
  {
    title: 'Deletar', 
    align: 'center', 
  },
];

const videoHeader = [
  {
    title: 'Miniatura', 
    align: 'center', 
  },
  {
    title: 'Categoria', 
    align: 'center', 
  },
  {
    title: 'Título', 
  },
  {
    title: 'Descrição', 
  },

  ...headerControls,
];

const categoryHeader = [
  {
    title: 'Nome', 
  },
  {
    title: 'Descrição', 
  },
  {
    title: 'Cor', 
    align: 'center', 
  },
  
  ...headerControls,
];

export { videoHeader, categoryHeader };
