import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Seo from 'components/seo';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import Facts from 'components/Facts';
import ClientHistory from 'components/ClientHistory';
import Formula from 'components/Formula';
import FormInMain from 'components/Form/FormInMain';
import WhyStepsAdd from 'components/WhyStepsAdd';
import Price from 'components/Price';
import Guarantee from 'components/Guarantee';
import Couch from 'components/Couch';
import Steps from 'components/Steps';
import Change from 'components/Change';
import BeBetter from 'components/BeBetter';
import ButtonUp from 'components/ButtonUp';
import Events from 'components/scripts/Events';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <>
      <Events />
      <Seo
        title={seo.title}
        description={seo.description}
        lang={i18n.language}
      />
      <Layout id="home">
        <Hero />
        <AboutMe />
        <Facts />
        <ClientHistory />
        <Formula />
        <FormInMain clickFrom="main" />
        <WhyStepsAdd />
        <Price />
        <Guarantee />
        <Couch />
        <Steps />
        <Change />
        <BeBetter />
        <ButtonUp />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
