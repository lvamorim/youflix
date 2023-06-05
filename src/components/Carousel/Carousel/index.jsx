import './slick.css';
import GetData from 'services/getData';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Placeholder from 'components/Placeholder';
import Thumbnail from 'components/Thumbnail';

const Carousel = ({ selectedVideo, videoCategory, handleOpenVideoCard }) => {
  const { videos } = GetData();

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 3.2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        },
      },
    ]
  };

  const styles = {
    videoBox: {
      cursor: 'pointer', 
      outline: 'none', 
    },
  };

  const ifNoVideo = 
    videoCategory && !videos.find((video) => video.category === videoCategory);

  return (
    <Slider {...settings}>
      {ifNoVideo ? 
        <Placeholder video /> 
      : 
      videos.map((video) => 
        (video.category === videoCategory && 
          (selectedVideo ? selectedVideo.id !== video.id : true) 
          /* hides the current selected video from the carousel */ ) && 
        <Box 
          key={video.id} 
          onClick={() => handleOpenVideoCard(video)} 
          sx={styles.videoBox} 
          >
          <Thumbnail url={video.url} category={video.category} />
          <Typography py={1}>{video.title}</Typography>
        </Box>
      )}
    </Slider>
  );
}

export default Carousel;
