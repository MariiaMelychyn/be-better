import React from 'react';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/reusableComponents/Slider';
import ClientHistoryItem from './ClientHistoryItem';

const ClientHistoryList = ({ clients }) => {
  return (
    <Slider
      slidesPerView={1}
      className="w-80 laptop:w-[600px]  desktop:w-[1064px] pb-[5px]"
    >
      {!!clients.length &&
        clients.map(({ frontmatter }, id) => {
          return (
            <SwiperSlide key={id}>
              <ClientHistoryItem itemData={frontmatter} />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};

export default ClientHistoryList;
