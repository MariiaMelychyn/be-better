import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';

import Container from '../Container';
import MarkdownList from 'components/reusableComponents/MarkdownList';
import useMediaRules from 'helpers/getMedia';

import {
  headerContainer,
  logo,
  link,
  contentContainer,
  title,
  textContainer,
} from './Pk.module.css';

const Pk = () => {
  const { t, i18n } = useTranslation();
  const translate = t('pages', { returnObjects: true });
  const media = useMediaRules();

  const allMarkdownRemark = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pk/" } }) {
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

  const data = allMarkdownRemark.text.nodes;
  return (
    <Container className="">
      <div className="relative w-full">
        <div className={headerContainer}>
          <Link to="/" className={logo}>
            <StaticImage
              src="../../images/logo.svg"
              width={90}
              height={56}
              className=""
              layout="fixed"
              alt={translate.logo}
            />
          </Link>
          <Link to="/" className={link}>
            <StaticImage
              className="mt-8 cursor-pointer m-auto w-8 tablet:ml-40 h-5 -ml-96  laptop:ml-80 laptop:h-7 desktop:-ml-60"
              src="../../images/back.png"
              alt={translate.arrow}
            />
          </Link>
        </div>
        <StaticImage
          layout="fullWidth"
          src="../../images/fonp-min.png"
          alt={translate.background}
          style={{ position: 'absolute' }}
          className="-z-20 top-11  tablet:object tablet:mt-6 tablet:h-20 tablet:w-36 laptop:w-96 laptop:mt-5 laptop:ml-80 -cover  h-20 ml-40   mt-0   mb-16 pr-0 max-w-5xl  desktop:h-36 desktop:-mt-12 desktop:ml-96 desktop:w-3/4"
          formats={['auto', 'webp']}
        />
        {media === 'desktop' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/pkl-min.png"
            alt={translate.security}
            className="w-3/4 -z-10 top-0  max-w-md  !float-right mr-40  -mt-32 mb-16  h-60 rounded-lg "
            formats={['auto', 'webp']}
          />
        )}

        <div className={contentContainer}>
          {data.map((node, id) => (
            <React.Fragment key={id}>
              {node.frontmatter.language === i18n.language && (
                <MarkdownList
                  listClassName={textContainer}
                  titleClassName={title}
                  tag="h1"
                  data={node}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Pk;
