import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import WithDiscount from 'components/reusableComponents/WithDiscount';
import Button from 'components/reusableComponents/Button';
import icons from 'images/sprite.svg';

import { preloadFormInModal } from 'services/preloader';

import useMediaRules from 'helpers/getMedia';
import { text, background } from './Change.module.css';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const FormInModal = loadable(() => import('../Form/FormInModal'));

const Change = () => {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  const media = useMediaRules();
  const [show, getRef] = useObserver();

  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const altTranslate = t('changes', { returnObjects: true });

  const markdown = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/change/" } }
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
      avatarMin: file(name: { eq: "fontwo-min" }) {
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
      avatarAbout: file(name: { eq: "about" }) {
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
      avatarJuliaMob: file(name: { eq: "change_mob" }) {
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
      avatarJuliaTablet: file(name: { eq: "change_tablet" }) {
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
      avatarJuliaDesk: file(name: { eq: "change_desk" }) {
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
      avatarUnion: file(name: { eq: "union-min" }) {
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
  const data = markdown.text.nodes;
  const avatarJlMob = markdown.avatarJuliaMob.childImageSharp.gatsbyImageData;
  const avatarJuliaTablet =
    markdown.avatarJuliaTablet.childImageSharp.gatsbyImageData;
  const avatarJuliaDesk =
    markdown.avatarJuliaDesk.childImageSharp.gatsbyImageData;

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <Section id="change" backgroundClass={show ? background : ''}>
        <Container
          className="relative h-full pb-8 laptop:pb-20 bg-oferta -z-20"
          getRef={getRef}
        >
          {data.map((node, id) => (
            <React.Fragment key={id}>
              {node.frontmatter.language === i18n.language && (
                <div>
                  {media === 'desktop' ? (
                    <svg className="absolute -z-10 w-5 h-[575px] mt-[228px] ml-20">
                      <use href={`${icons}#arrow-max`} />
                    </svg>
                  ) : (
                    <svg className="absolute -z-10  w-[88px] h-[476px] mt-[408px] ml-4 laptop:mt-[256px] laptop:h-[444px] laptop:ml-[88px]">
                      <use href={`${icons}#arrow-min`} />
                    </svg>
                  )}
                  <Heading
                    tag="h2"
                    className="tablet:text-xl tablet:font-medium pl-5 pr-5 text-orangeDark pt-[37px] text-center mb-8 laptop:font-semibold laptop:text-34 laptop:w-[310px] laptop:pt-5 laptop:mb-4 laptop:pl-20 laptop:text-start desktop:w-[700px] desktop:pt-20"
                    text={node.frontmatter.title}
                  />
                  {media === 'mobile' && (
                    <div className="overflow-hidden">
                      <GatsbyImage
                        image={avatarJlMob}
                        alt={altTranslate.author}
                        style={{ position: 'absolute' }}
                        className="w-[280px] h-[280px] -ml-44 rounded-2xl"
                      />
                    </div>
                  )}
                  {media === 'tablet' && (
                    <div className="laptop:float-right laptop:-mt-40 overflow-hidden">
                      <GatsbyImage
                        image={avatarJuliaTablet}
                        alt={altTranslate.author}
                        style={{ position: 'absolute' }}
                        className="-ml-44 rounded-2xl laptop:w-[310px] laptop:h-[442px]"
                      />
                    </div>
                  )}
                  {media === 'desktop' && (
                    <div className="laptop:float-right laptop:-mt-40 display:block desktop:-mt-[77px] desktop:-mr-[20px] overflow-hidden">
                      <GatsbyImage
                        image={avatarJuliaDesk}
                        alt={altTranslate.author}
                        style={{ position: 'absolute' }}
                        className="-ml-44 rounded-2xl desktop:w-[480px] desktop:h-[734px] desktop:-ml-[600px] desktop:-mt-[40px] desktop:pb-[80px]"
                      />
                    </div>
                  )}
                  <div className="flex justify-between">
                    <div className="float-left desktop:ml-[150px] desktop:mr-[100px]">
                      <div className={text}>
                        <div
                          className="laptop:-mt-[255px] laptop:mb-16 desktop:mb-6 desktop:w-[524px] float-left block"
                          key={node.frontmatter.language}
                          dangerouslySetInnerHTML={{ __html: node.html }}
                        />
                        <WithDiscount
                          classnameText="text-change text-2xl text-mainSecond pt-[16px] pb-[16px] laptop:!w-[690px] laptop:mb-8 desktop:pl-[70px] desktop:pr-0 desktop:!w-[440px]"
                          classnameDiscount="text-black font-semibold"
                        />
                      </div>
                      <Button
                        id="button-change"
                        type="button"
                        className="!bg-mainSecond border px-16 !ml-8 desktop:!ml-0 py-2 rounded-3xl hover:!bg-[#d46828] focus:!bg-[#d46828] ease-in duration-300 laptop:!ml-20"
                        doAction={() => showModal()}
                        onMouseOver={preloadFormInModal}
                        onTouchStart={preloadFormInModal}
                      >
                        {buttonTranslate.button}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </Container>
      </Section>
      {modal && (
        <FormInModal hideModal={hideModal} currentPlace="change in life" />
      )}
    </>
  );
};

export default Change;
