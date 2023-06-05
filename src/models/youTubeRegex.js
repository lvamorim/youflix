const matchYouTubeRegex = (url) => {
  const regex = /^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  
  return match;
};

export default matchYouTubeRegex;
