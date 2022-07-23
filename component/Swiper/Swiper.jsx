import React from 'react';
import Image from "next/image"
import Typography from '@mui/material/Typography';
import Box from '@mui/material//Box';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'



// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function SwiperCom({sliderData}) {
  return (
    <Box  padding={2} className="App">
      <Typography
        variant={'h4'}
        align={'center'}
        fontWeight={700}
      >
        Swiper + Material-UI example
      </Typography>
      
      <Box marginTop={4}>
        <Swiper navigation={true} className="mySwiper" >
          {/** Slides */}
          {sliderData?.map((item, i) => (
            <SwiperSlide key={i}>
                  <Image
                    src={item.image}
                    alt={item.title}  
                  />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
