import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css';

import 'swiper/modules/free-mode/free-mode.min.css';

import 'swiper/modules/thumbs/thumbs.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const CustomSwiper = ({
  slidesPerView = 1,
  spaceBetween = 0,
  slidesPerGroup = 1,
  loop = false,
  children,
}) => {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        loop={loop}
        centeredSlides={true}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <button
        className='slideNavigation nextSlide'
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} color='#000' />
      </button>
      <button
        className='slideNavigation prevSlide'
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} color='#000' />
      </button>
    </>
  );
};

export default CustomSwiper;
