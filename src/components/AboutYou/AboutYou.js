import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import MarkdownList from 'components/reusableComponents/MarkdownList';

import { listContainer } from './AboutYou.module.css';

const AboutYou = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutYou/" } }) {
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
    <div className="mx-auto px-11  w-[280px] py-6  laptop:px-[10px] laptop:absolute laptop:w-50 laptop:pt-4 laptop:pb-7 laptop:left-[65px] laptop:top-[310px] desktop:w-[284px] desktop:py-6 desktop:left-[75px] desktop:top-[420px] bg-white rounded-2xl shadow-you">
      {data.map((node, id) => (
        <React.Fragment key={id}>
          {node.frontmatter.language === i18n.language && (
            <MarkdownList
              listClassName={listContainer}
              titleClassName="text-main mb-3 text-base laptop:w-[148px] laptop:m-auto laptop:mb-2"
              tag="h2"
              data={node}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AboutYou;
