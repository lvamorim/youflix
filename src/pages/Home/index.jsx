import GetData from 'services/getData';
import { useState } from 'react';
import { Box } from '@mui/material';
import Placeholder from 'components/Placeholder';
import VideoCard from 'components/Carousel/VideoCard';
import CategoryStack from 'components/Carousel/CategoryStack';
import Carousel from 'components/Carousel/Carousel';

const Home = () => {
  const { categories } = GetData();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const ifNoCategories = !categories.length;
  
  return (
  <>
    {ifNoCategories ? <Placeholder start />
    :
    categories.map((category) => 
      <Box key={category.id}>
        {(selectedVideo && selectedVideo.category === category.name) && 
        /* prevents card from rendering in the wrong categories too */ 
          <VideoCard selectedVideo={selectedVideo} />
        }
        <CategoryStack 
          selectedVideo={selectedVideo} 
          buttonColor={category.color} 
          buttonLabel={category.name} 
          description={category.description} 
        />
        <Carousel 
          selectedVideo={selectedVideo} 
          videoCategory={category.name} 
          handleOpenVideoCard={setSelectedVideo} 
        />
      </Box>
    )}
  </>
  );
};

export default Home;
