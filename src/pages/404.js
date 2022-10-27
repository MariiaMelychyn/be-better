import * as React from 'react';
import NotFound from 'components/notFound';
import Seo from 'components/seo';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Section from 'components/reusableComponents/Section';
import Container from 'components/Container';

const NotFoundPage = () => {
  const { i18n } = useTranslation();

  <Seo title="404" description="error page" lang={i18n.language} />;

  return (
    <Section>
      <Container>
        <NotFound />
      </Container>
    </Section>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

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
