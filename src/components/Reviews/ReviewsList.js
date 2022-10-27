import React from 'react';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/reusableComponents/Slider';
import Review from './Review';

const ReviewsList = ({ slidesPerView, reviewsData }) => {
  return (
    <Slider
      slidesPerView={slidesPerView}
      className="w-[243px]  laptop:w-[600px]  desktop:w-[1064px] pb-[5px]"
    >
      {!!reviewsData.length &&
        reviewsData.map(({ frontmatter }, id) => {
          return (
            <SwiperSlide key={id} className="slide h-auto slider-item-width  ">
              <Review frontmatter={frontmatter} />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};

export default ReviewsList;
