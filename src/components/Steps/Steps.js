import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Container from 'components/Container';
import Section from 'components/reusableComponents/Section';
import List from 'components/reusableComponents/Page';

import svg from 'images/iconku.svg';

import { svgBackground, background } from './Steps.module.css';
import useObserver from 'components/ObserverWrapper/useObserver';

const Steps = () => {
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });
  const [show, getRef] = useObserver();

  return (
    <Section id="steps" backgroundClass={show ? svgBackground : ''}>
      <Container
        className={`relative max-h-full pb-12 laptop:pb-16 desktop:pb-0 ${
          show ? background : ''
        }`}
        getRef={getRef}
      >
        <List data={data} icons={svg} />
      </Container>
    </Section>
  );
};

export default Steps;
