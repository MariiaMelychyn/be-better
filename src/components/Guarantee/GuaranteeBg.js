import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import useMediaRules from 'helpers/getMedia';
import {
  icon,
  photoMobile,
  photoTablet,
  photoDesktop,
} from './Guarantee.module.css';

import icons from 'images/sprite.svg';

const GuaranteeBg = () => {
  const { t } = useTranslation();

  const { background } = t('guarantee', { returnObjects: true });
  const media = useMediaRules();

  const foto = useStaticQuery(graphql`
    query {
      guaranteeMobile: file(name: { eq: "guarantee_mobile" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      guaranteeLaptop: file(name: { eq: "guarantee_tablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      guaranteeDesktop: file(name: { eq: "guarantee_desktop" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const mobileGuarantee = foto.guaranteeMobile.childImageSharp.gatsbyImageData;
  const tabletGuarantee = foto.guaranteeLaptop.childImageSharp.gatsbyImageData;
  const desktopGuarantee =
    foto.guaranteeDesktop.childImageSharp.gatsbyImageData;

  return (
    <div>
      <svg className={icon}>
        <use href={`${icons}#quote-left`} />
      </svg>

      {media === 'mobile' && (
        <GatsbyImage
          image={mobileGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoMobile}
        />
      )}
      {media === 'tablet' && (
        <GatsbyImage
          image={tabletGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoTablet}
        />
      )}
      {media === 'desktop' && (
        <GatsbyImage
          image={desktopGuarantee}
          alt={background}
          style={{ position: 'absolute' }}
          className={photoDesktop}
        />
      )}
    </div>
  );
};

export default GuaranteeBg;
