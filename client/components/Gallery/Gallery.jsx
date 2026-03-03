import { React, useState } from 'react';
import GalleryItem from './GalleryItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function Gallery({searchArr, setSearchArr}) {
  const galleryArr = searchArr.map((e, k)=>{})
  return (
    <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y]}

      spaceBetween={25

      }
      slidesPerView={3
        
      }
      navigation
      pagination={{ clickable: true }}

      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}

      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>Slide 1<GalleryItem/></SwiperSlide>
      <SwiperSlide>Slide 2<GalleryItem/></SwiperSlide>
      <SwiperSlide>Slide 3<GalleryItem/></SwiperSlide>
      <SwiperSlide>Slide 4<GalleryItem/></SwiperSlide>
      
    </Swiper>
  );
}
