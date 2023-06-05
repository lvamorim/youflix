import matchYouTubeRegex from './youTubeRegex';

const thumbnail = (url) => {
  const id = matchYouTubeRegex(url)[1];
  const URL = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return URL;
};

export default thumbnail;
