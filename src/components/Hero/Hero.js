import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import Container from 'components/Container';
import HeroBackground from './HeroBackground';
import Form from 'components/Form';
import Social from 'components/Social';
import WithDiscount from 'components/reusableComponents/WithDiscount';

import { background } from './Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });

  return (
    <Section
      style={{ position: 'static' }}
      id="home"
      backgroundClass={background}
    >
      <div className="relative h-[690px] laptop:h-[1133px] desktop:h-[780px]">
        <HeroBackground />
        <Container>
          <div className="w-[1440px] h-[780px] z-0 absolute bg-white hidden desktop:block">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/hero_desktop.jpg"
              alt={hero.background}
              style={{ position: 'absolute' }}
              className="w-1036 h-full z-0 top-0 right-0"
            />
          </div>

          <div className="relative z-10 flex pl-5 laptop:flex-row-reverse laptop:justify-between desktop:flex-row desktop:justify-start mb-10 pt-[92px] laptop:pt-[200px] laptop:px-16 laptop:mb-50 text-left desktop:items-start desktop:pt-30 desktop:px-20 desktop:mb-0">
            <div className="mr-[30px] laptop:mr-0 desktop:mr-[172px]">
              <Social classNameList="space-y-2 laptop:space-y-8" />
            </div>
            <div className="laptop:pl-5 desktop:pl-0">
              <p className="text-2xl font-caveat laptop:text-32 text-black">
                {hero.teach}
              </p>
              <h1 className="font-medium text-black text-xl laptop:font-normal laptop:text-5xl laptop:leading-[65px]">
                {hero.life}
                <br />
                <span className="font-semibold text-black text-2xl laptop:font-light laptop:text-59">
                  {hero.kaif}
                </span>
              </h1>
              <p
                className={`text-2xl font-caveat laptop:text-32 text-black desktop:mb-5`}
              >
                {hero.emotion} <br />
                {hero.burn}
              </p>
            </div>

            <p className="z-10 ml-auto font-caveat text-white text-28 hidden desktop:block">
              {hero.if}
              {hero.emo} <br />
              {hero.yourLife} {hero.pleasure}
            </p>
          </div>
          <div className="relative z-10 laptop:pl-16 desktop:pl-[296px] text-left">
            <Form
              clickFrom="hero"
              formClassname="mb-8 m-auto laptop:mr-auto laptop:ml-0 laptop:mb-13 desktop:mb-2"
            />
          </div>
          <WithDiscount
            classnameText="px-5 text-orangeDark text-lg leading-[18px] laptop:w-81 laptop:leading-[23px] laptop:ml-16 laptop:p-0 laptop:text-black desktop:ml-[296px] text-left relative z-0"
            classnameDiscount="laptop:font-medium text-mainSecond"
          />
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
