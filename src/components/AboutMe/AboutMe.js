import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import AboutMeLap from './AboutMeLap';
import AboutMePrimaryText from './AboutMePrimaryText';
import useMediaRules from 'helpers/getMedia';

import { background } from './AboutMe.module.css';

import icon from 'images/signature.svg';
import Container from 'components/Container';

const AboutMe = () => {
  const media = useMediaRules();

  const photo = useStaticQuery(graphql`
    query {
      avatarDesktop: file(name: { eq: "avatar-desktop" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      avatarMobile: file(name: { eq: "avatar-mob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      avatarTablet: file(name: { eq: "avatar-tablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const { t } = useTranslation();

  const data = t('aboutMe', { returnObjects: true });

  const mobileScreenAvatar = photo.avatarMobile.childImageSharp.gatsbyImageData;
  const tabletScreenAvatar = photo.avatarTablet.childImageSharp.gatsbyImageData;
  const desktopScreenAvatar =
    photo.avatarDesktop.childImageSharp.gatsbyImageData;

  return (
    <Section backgroundClass={background} id="nav-about">
      <Container className="py-8 px-5 laptop:py-20 laptop:px-16 desktop:px-20  text-base  relative bg-white">
        <div className="flex flex-col justify-center laptop:justify-end laptop:flex-row">
          <div className="flex mb-6 laptop:mb-0 laptop:block ">
            {media === 'mobile' && (
              <div className="w-[134px] text-left mr-3">
                <Heading
                  tag={'h2'}
                  className="title-primary text-left mb-4"
                  text={data.title}
                />
                <span className="text-black text-left text-sm">
                  {data.oneParagraphFirst}
                  <span className="text-caveat leading-[0.9]">
                    {data.oneParagraphSpan}
                  </span>
                </span>
              </div>
            )}

            {media === 'desktop' && (
              <div className="overflow-hidden ">
                <GatsbyImage
                  image={desktopScreenAvatar}
                  alt={data.alt}
                  className="desktop:w-[524px] desktop:h-full rounded-2xl  "
                />
              </div>
            )}
            {media === 'mobile' && (
              <div className="overflow-hidden h-[164px]">
                <GatsbyImage
                  image={mobileScreenAvatar}
                  alt={data.alt}
                  className="w-[134px] h-full rounded-2xl  "
                />
              </div>
            )}
            {media === 'tablet' && (
              <div className="overflow-hidden ">
                <GatsbyImage
                  image={tabletScreenAvatar}
                  alt={data.alt}
                  className="laptop:w-[270px]  laptop:h-[342px] laptop:mr-5 rounded-2xl  "
                />
              </div>
            )}
          </div>
          <AboutMePrimaryText data={data} />
        </div>
        {media === 'tablet' && <AboutMeLap data={data} />}
        <div className="w-[265px] mt-8  ml-auto laptop:mr-0 laptop:mt-16 desktop:mt-13">
          <svg className="w-[212px] ml-auto h-16 laptop:w-[265px] laptop:h-20">
            <use href={`${icon}#icon-signature`} />
          </svg>
        </div>
      </Container>
    </Section>
  );
};

export default AboutMe;
