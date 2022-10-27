import React from 'react';
import Seo from 'components/seo';
import { graphql } from 'gatsby';

import Oferta from 'components/Oferta';
import ButtonUp from 'components/ButtonUp';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Po = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <div>
      <Seo
        title={seo.title}
        description={seo.description}
        lang={i18n.language}
      />
      <Oferta />
      <ButtonUp />
    </div>
  );
};

export default Po;

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
