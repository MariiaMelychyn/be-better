import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';

import {
  listFormula,
  formula,
  formulaContainer,
  itemFormula,
  iconFormula,
  svgBgFormula,
  svgContainerFormula,
  textContainerFormula,
  iconArrow,
  testSec,
  title,
  background,
} from './Formula.module.css';

import { IoIosArrowRoundDown } from 'react-icons/io';
import icons from 'images/formulaIcons.svg';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const Formula = () => {
  const { t } = useTranslation();
  const [show, getRef] = useObserver();
  const data = t('formula', { returnObjects: true });

  return (
    <Section
      className={formula}
      id="formula"
      backgroundClass={show ? background : ''}
    >
      <Container getRef={getRef}>
        <StaticImage
          layout="fullWidth"
          src="../../images/background/background_blu.jpg"
          alt={data.background}
          style={{ position: 'absolute' }}
          className="h-full w-[320px] laptop:w-[768px] desktop:w-[1440px] -z-10 top-0"
        />
        <div>
          <Heading tag="h2" className={title} text={data.title} />
          {!!data.list.length && (
            <ul className={listFormula}>
              {data.list.map(
                ({ svg, firstWord, colorWord, thirdWord }, idx) => {
                  return (
                    <li key={`${icons}-${idx}`} className={formulaContainer}>
                      <div className={itemFormula}>
                        <div className={textContainerFormula}>
                          <div className={svgContainerFormula}>
                            <svg className={iconFormula}>
                              <use href={`${icons}#icon-${svg}`} />
                            </svg>
                          </div>
                          <p className={testSec}>
                            {firstWord} <br />
                            <span className="text-main font-bold ">
                              {colorWord}
                            </span>
                            {thirdWord}
                          </p>
                          <svg className={svgBgFormula}>
                            <use href={`${icons}#icon-${svg}`} />
                          </svg>
                        </div>
                        <IoIosArrowRoundDown size={60} className={iconArrow} />
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Formula;
