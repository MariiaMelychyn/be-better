import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const WithDiscount = ({ classnameText = '', classnameDiscount = '' }) => {
  const { i18n } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/discount/" } }) {
        nodes {
          frontmatter {
            ukFirst
            ukDiscount
            ukSecond
            enFirst
            enDiscount
            enSecond
            ruFirst
            ruDiscount
            ruSecond
          }
          id
        }
      }
    }
  `);

  const [frontmatter] = allMarkdownRemark.nodes;
  const data = frontmatter.frontmatter;

  return (
    <p className={`font-caveat ${classnameText}`}>
      {data[`${i18n.language}First`]}{' '}
      <span className={classnameDiscount}>
        {data[`${i18n.language}Discount`]}
      </span>{' '}
      {data[`${i18n.language}Second`]}
    </p>
  );
};

WithDiscount.propTypes = {
  classnameText: PropTypes.string,
  classnameDiscount: PropTypes.string,
};

export default WithDiscount;
