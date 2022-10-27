import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Seo from 'components/seo';
import Policy from 'components/Pk';
import ButtonUp from 'components/ButtonUp';

const Pk = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <div>
      <Seo
        title={seo.title}
        description={seo.description}
        lang={i18n.language}
      />
      <Policy />
      <ButtonUp />
    </div>
  );
};

export default Pk;

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
