import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import MarkdownList from 'components/reusableComponents/MarkdownList';
import useMediaRules from 'helpers/getMedia';

import { textBeBetter, background } from './BeBetter.module.css';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const BeBetter = () => {
  const { t, i18n } = useTranslation();
  const media = useMediaRules();
  const [show, getRef] = useObserver();

  const allMarkdownRemark = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/beBetter/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
      avatarMin: file(name: { eq: "jumper" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarCar: file(name: { eq: "car_desk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarCarTablet: file(name: { eq: "car_tablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarGlassesDesk: file(name: { eq: "glasses_desk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarGlassesMob: file(name: { eq: "glasses_mob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const translate = t('bebetter', { returnObjects: true });

  const data = allMarkdownRemark.text.nodes;
  const jumper = allMarkdownRemark.avatarMin.childImageSharp.gatsbyImageData;
  const avatarCarDesk =
    allMarkdownRemark.avatarCar.childImageSharp.gatsbyImageData;
  const avatarCarTablet =
    allMarkdownRemark.avatarCar.childImageSharp.gatsbyImageData;
  const avatarGlasses =
    allMarkdownRemark.avatarGlassesDesk.childImageSharp.gatsbyImageData;
  const avatarGlassesMob =
    allMarkdownRemark.avatarGlassesMob.childImageSharp.gatsbyImageData;

  return (
    <Section id="be-better" backgroundClass={show ? background : ''}>
      <Container
        className="bg-background py-8 px-5 laptop:px-16 desktop:w-[1440px] desktop:h-[772px] laptop:pt-20 desktop:p-20"
        getRef={getRef}
      >
        <div className="laptop:flex">
          <div>
            {data.map((node, id) => (
              <React.Fragment key={id}>
                {node.frontmatter.language === i18n.language && (
                  <MarkdownList
                    listClassName={textBeBetter}
                    titleClassName="text-buttonMobile font-medium text-xl text-center mb-[24px] laptop:w-[420px] laptop:mb-12 laptop:font-semibold laptop:text-4xl desktop:w-[500px] desktop:ml-0 desktop:mb-4 desktop:text-left desktop:pr-10"
                    tag="h2"
                    data={node}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="laptop:-ml-20 desktop:flex desktop:ml-12">
            <div className="desktop:mt-6">
              {media === 'desktop' && (
                <div className="desktop:mb-6">
                  <GatsbyImage
                    image={jumper}
                    alt={translate.jumper}
                    className="rounded-2xl desktop:w-[384px] desktop:h-[270px] desktop:-ml-12"
                  />
                </div>
              )}

              {media === 'desktop' && (
                <div className="laptop:ml-28 desktop:ml-auto laptop:mb-6 desktop:w-[284px] desktop:h-[294px]">
                  <GatsbyImage
                    image={avatarCarDesk}
                    alt={translate.auto}
                    className="rounded-2xl laptop:w-[200px] laptop:h-[162px] desktop:w-full desktop:h-full"
                  />
                </div>
              )}
              {media === 'tablet' && (
                <div className="laptop:ml-28 desktop:ml-auto laptop:mb-6 desktop:w-[284px] desktop:h-[294px]">
                  <GatsbyImage
                    image={avatarCarTablet}
                    alt={translate.auto}
                    className="rounded-2xl laptop:w-[200px] laptop:h-[162px] desktop:w-full desktop:h-full"
                  />
                </div>
              )}
            </div>
            <div className="w-[280px] h-[300px] laptop:w-[310px] laptop:h-[544px] desktop:ml-3">
              {media !== 'mobile' && (
                <GatsbyImage
                  image={avatarGlasses}
                  alt={translate.glasses}
                  className="rounded-2xl laptop:w-full laptop:h-full desktop:w-[308px] desktop:h-[440px]"
                />
              )}

              {media === 'mobile' && (
                <GatsbyImage
                  image={avatarGlassesMob}
                  alt={translate.glasses}
                  className="rounded-2xl laptop:w-full laptop:h-full desktop:w-[308px] desktop:h-[440px]"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BeBetter;
