import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Donations = ({ className = '', classNameText = '' }) => {
  const { i18n } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/donations/" } }
      ) {
        nodes {
          frontmatter {
            ukDonations
            enDonations
            ruDonations
          }
        }
      }
    }
  `);
  const [frontmatter] = allMarkdownRemark.nodes;
  const text = frontmatter.frontmatter[`${i18n.language}Donations`];
  return (
    <div className={`${className}`}>
      <p className={`${classNameText}`}>{text}</p>
    </div>
  );
};

export default Donations;
