import React from 'react';
import Review from './Review';

const ReviewsListSkeleton = ({ reviewsData }) => {
  return (
    <ul
      className={
        'flex gap-x-6 pb-[5px] w-[176px] overflow-hidden mx-auto laptop:w-[594px] desktop:w-[1048px] desktop:gap-x-[36px]'
      }
    >
      {!!reviewsData.length &&
        reviewsData.map(({ frontmatter }, id) => {
          return (
            <li key={id} className="slide h-auto slider-item-width ">
              <Review frontmatter={frontmatter} />
            </li>
          );
        })}
    </ul>
  );
};

export default ReviewsListSkeleton;
