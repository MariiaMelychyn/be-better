import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Slider = ({ children, slidesPerView, className = '' }) => {
  return (
    <div className="relative">
      <Swiper
        className={`mx-auto ${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={slidesPerView}
        modules={[Navigation, EffectFade, Pagination]}
      >
        {children}
      </Swiper>
      <div
        className="prev-slider swiper-button-disabled hidden desktop:block"
        role={'button'}
      >
        <BsChevronLeft size={48} />
      </div>
      <div
        className="next-slider swiper-button-disabled hidden desktop:block"
        role={'button'}
      >
        <BsChevronRight size={48} />
      </div>
    </div>
  );
};

export default Slider;
