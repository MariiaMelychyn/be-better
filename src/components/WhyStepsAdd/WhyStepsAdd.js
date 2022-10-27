import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import List from 'components/reusableComponents/Steps';
import Reviews from 'components/Reviews';
import svg from 'images/iconsnew.svg';

import { background, svgBackground } from './WhyStepsAdd.module.css';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const StepsAdd = () => {
  const { t } = useTranslation();
  const [show, getRef] = useObserver();
  const data = t('stepsnew', { returnObjects: true });

  return (
    <>
      <Section
        id="whyStep"
        style={{ position: 'static' }}
        backgroundClass={show ? svgBackground : ''}
      >
        <Container className={show ? background : ''} getRef={getRef}>
          <List data={data} icons={svg} />
          <Reviews />
        </Container>
      </Section>
    </>
  );
};

export default StepsAdd;
