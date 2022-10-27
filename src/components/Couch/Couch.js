import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import Button from 'components/reusableComponents/Button';
import useMediaRules from 'helpers/getMedia';

import { preloadFormInModal } from 'services/preloader';

import { background } from './Couch.module.css';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const FormInModal = loadable(() => import('components/Form/FormInModal'));

const Couch = () => {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });
  const couch = t('couch', { returnObjects: true });
  const media = useMediaRules();
  const [show, getRef] = useObserver();

  const photo = useStaticQuery(graphql`
    query {
      avatarWithNote: file(name: { eq: "with_note" }) {
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
      avatarWithNoteMob: file(name: { eq: "with_note_mob" }) {
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
      notebook: file(name: { eq: "note" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      skyscraper: file(name: { eq: "skyscraper_desk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      skyscraperMob: file(name: { eq: "skyscraper_mob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const desktopScreenAvatar =
    photo.avatarWithNote.childImageSharp.gatsbyImageData;
  const smartScreenAvatar =
    photo.avatarWithNoteMob.childImageSharp.gatsbyImageData;
  const notebookImg = photo.notebook.childImageSharp.gatsbyImageData;
  const skyscraper = photo.skyscraper.childImageSharp.gatsbyImageData;
  const skyscraperMob = photo.skyscraperMob.childImageSharp.gatsbyImageData;

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <Section id="couch" backgroundClass={show ? background : ''}>
        <Container
          className="text-left px-5 pt-8 pb-[38px]  bg-background laptop:px-16 desktop:px-20 laptop:py-20 desktop:pt-5 desktop:pb-20"
          getRef={getRef}
        >
          <div className="laptop:flex laptop:justify-between text-sm laptop:text-base">
            <div className="flex laptop:block">
              <Heading
                tag="h2"
                className={`w-[134px] title-primary mr-3  text-left laptop:hidden`}
                text={couch.title}
              />
              {media === 'mobile' ? (
                <GatsbyImage
                  image={smartScreenAvatar}
                  alt={couch.withNote}
                  className="rounded-2xl mb-4 desktop:mt-[98px] w-[134px] h-[160px] laptop:w-[310px] laptop:h-[398px] desktop:w-[366px] desktop:h-[520px]"
                />
              ) : (
                <GatsbyImage
                  image={desktopScreenAvatar}
                  alt={couch.withNote}
                  className="rounded-2xl mb-4 desktop:mt-[98px] w-[134px] h-[160px] laptop:w-[310px] laptop:h-[398px] desktop:w-[366px] desktop:h-[520px]"
                />
              )}
            </div>

            <div>
              <div className="laptop:w-[310px] desktop:w-[326px] relative laptop:leading-[1.36]">
                <Heading
                  tag="h3"
                  className={`hidden title-primary laptop:mr-0 laptop:mb-8  laptop:w-[282px] laptop:text-34 desktop:mb-13 desktop:mt-[58px] text-left  laptop:block`}
                  text={couch.title}
                />
                <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.mySelf}</p>
                <p className="mb-2 laptop:mb-4 desktop:mb-6 ">{couch.course}</p>
                <p className="desktop:mb-12 ">{couch.noTime}</p>
                <p
                  className={`text-caveat w-[360px] absolute left-[210px] bottom-[60px] hidden desktop:block`}
                >
                  {couch.mySelf}
                </p>

                {media === 'desktop' && (
                  <Button
                    id="button-couch"
                    type="button"
                    className={` h-12 w-70 border border-main rounded-full text-white z-10 laptop:mt-[110px] !mt-[180px]`}
                    doAction={() => showModal()}
                  >
                    {form.button}
                  </Button>
                )}
              </div>
            </div>
            {media !== 'tablet' && (
              <div className="relative">
                <div>
                  {media !== 'tablet' && (
                    <GatsbyImage
                      image={notebookImg}
                      alt={couch.notebook}
                      className="mt-4 rounded-2xl desktop:w-[416px] desktop:h-[280px] "
                    />
                  )}

                  <p className="mt-[58px] w-[280px] desktop:w-81">
                    {couch.why}
                  </p>

                  {media !== 'desktop' && (
                    <Button
                      type="button"
                      className={`h-12 w-70 border border-main rounded-full text-white z-10 laptop:mt-[110px]  !ml-0  !mt-12 `}
                      doAction={() => showModal()}
                    >
                      {form.button}
                    </Button>
                  )}

                  {media !== 'mobile' && (
                    <div className="absolute right-0 rounded-2xl mt-[20px] mr-auto">
                      <GatsbyImage
                        image={skyscraper}
                        alt={couch.skyscraper}
                        className="w-[160px] h-[176px] rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {media === 'tablet' && (
            <div className="laptop:mt-8 laptop:w-auto">
              <p className="laptop:w-auto">{couch.why}</p>
              <div className="flex justify-between mt-8">
                <div className="w-[420px] ">
                  <p className="text-caveat leading-[1.08]">{couch.mySelf}</p>
                  <Button
                    type="button"
                    className={`h-12 w-70 border border-main rounded-full text-white z-10 laptop:mt-[110px] !ml-0  !mt-12 `}
                    doAction={() => showModal()}
                    onMouseOver={preloadFormInModal}
                    onTouchStart={preloadFormInModal}
                  >
                    {form.button}
                  </Button>
                </div>
                <GatsbyImage
                  image={skyscraperMob}
                  className="w-[201px] h-[174px] rounded-2xl"
                  alt={couch.skyscraper}
                />
              </div>
            </div>
          )}
        </Container>
      </Section>
      {modal && <FormInModal hideModal={hideModal} currentPlace="with couch" />}
    </>
  );
};

export default Couch;
