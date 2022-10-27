import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';

import Heading from 'components/reusableComponents/Heading';
import ObserverWrapper from 'components/ObserverWrapper/ObserverWrapper';
import ReviewsListSkeleton from './ReviewsListSkeleton';
import useMediaRules from 'helpers/getMedia';

import { CgQuote } from 'react-icons/cg';

const ReviewsList = loadable(() => import('./ReviewsList'));

const Reviews = () => {
  const [slide, setSlide] = useState(3);
  const media = useMediaRules();

  const { t } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reviews/" } }) {
        nodes {
          frontmatter {
            ukName
            ukPosition
            ukText
            enName
            enPosition
            enText
            ruName
            ruPosition
            ruText
            image {
              id
              childImageSharp {
                gatsbyImageData
                id
              }
            }
          }
          id
        }
      }
    }
  `);
  const clients = allMarkdownRemark.nodes;

  useEffect(() => {
    if (media === 'mobile') {
      setSlide(1);
    } else if (media === 'desktop') {
      setSlide(3);
    } else {
      setSlide(2);
    }
  }, [media, slide]);

  const reviews = t('reviews', { returnObjects: true });

  return (
    <div
      id="nav-reviews"
      className="px-5 mt-[70px] laptop:mt-[280px] desktop:mt-[160px] laptop:pb-[131px] desktop:pb-[132px] relative z-50"
    >
      <Heading
        tag="h2"
        className="title-primary text-orangeDark  mb-14 laptop:mb-[76px]  laptop:text-34 desktop:mb-11"
        text={reviews.title}
      />

      <CgQuote
        className="text-mainSecond absolute top-0 -left-[15px] desktop:left-[60px] "
        size={120}
      />

      <ObserverWrapper
        component={<ReviewsList reviewsData={clients} slidesPerView={slide} />}
        fallback={<ReviewsListSkeleton reviewsData={clients} />}
      />

      {media !== 'mobile' && (
        <CgQuote
          className="text-mainSecond absolute  right-[120px] bottom-[80px]"
          size={120}
        />
      )}
    </div>
  );
};

export default Reviews;
