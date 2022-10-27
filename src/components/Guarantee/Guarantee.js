import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import GuaranteeBg from './GuaranteeBg';
import MarkdownList from 'components/reusableComponents/MarkdownList';

import { guarantee, title, text, background } from './Guarantee.module.css';
import Container from 'components/Container';
import useObserver from 'components/ObserverWrapper/useObserver';

const Guarantee = () => {
  const { i18n } = useTranslation();
  const [show, getRef] = useObserver();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/guarantee/" } }
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
    }
  `);

  const data = allMarkdownRemark.nodes;

  return (
    <Section id="guarantee" backgroundClass={show ? background : ''}>
      <Container className={guarantee} getRef={getRef}>
        <GuaranteeBg />
        {data.map((node, id) => (
          <React.Fragment key={id}>
            {node.frontmatter.language === i18n.language && (
              <MarkdownList
                listClassName={text}
                titleClassName={title}
                tag="h2"
                data={node}
              />
            )}
          </React.Fragment>
        ))}
      </Container>
    </Section>
  );
};

export default Guarantee;
