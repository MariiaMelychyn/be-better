import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import Container from 'components/Container';
import Form from 'components/Form';
import Social from 'components/Social';
import Donations from 'components/Donations';
import WithDiscount from 'components/reusableComponents/WithDiscount';
import Heading from 'components/reusableComponents/Heading';
import useMediaRules from 'helpers/getMedia';

import {
  footerContainer,
  gradient,
  content,
  logo,
  social,
  titleContainer,
  discountText,
  discount,
  icf,
  form,
  accepttext,
  list,
  link,
  donate,
  title,
  price,
  background,
} from './Footer.module.css';

import icons from 'images/sprite.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const translation = t('footer', { returnObjects: true });
  const media = useMediaRules();

  const markdown = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/footer/" } }
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
  const data = markdown.text.nodes;

  return (
    <footer id="nav-feedback" className={background}>
      <div
        className={
          media === 'desktop'
            ? `${footerContainer} ${gradient}`
            : `${footerContainer}`
        }
      >
        <Container>
          <div className={content}>
            <div className="desktop:flex justify-between">
              <div className={social}>
                <Social classNameList="space-y-6 laptop:space-y-4 desktop:space-y-8" />
                <div>
                  {data.map((node, id) => (
                    <React.Fragment key={id}>
                      {node.frontmatter.language === i18n.language && (
                        <div
                          key={node.frontmatter.language}
                          className={titleContainer}
                        >
                          <Heading
                            tag="h2"
                            className={title}
                            text={node.frontmatter.title}
                          />
                          <WithDiscount
                            classnameText={discountText}
                            classnameDiscount={discount}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="laptop:flex laptop:flex-row-reverse desktop:flex-row desktop:justify-between">
                <div className={form}>
                  <Form
                    clickFrom="footer"
                    formClassname="mb-6 desktop:mb-[73px]"
                    classnameAccept={accepttext}
                  />
                </div>
                <div>
                  {media === 'desktop' && (
                    <Link to="#home">
                      <svg className={logo}>
                        <use href={`${icons}#logo`} />
                      </svg>
                    </Link>
                  )}
                  <div className={icf}>
                    <StaticImage
                      src="../../images/icf.png"
                      alt={translation.logo}
                    />
                  </div>
                  <Donations className={donate} classNameText="text-main " />
                  <p className={price}>{translation.priceByOne}</p>
                </div>
              </div>
            </div>

            <ul className={list}>
              {translation.links.map(({ name, id }) => (
                <li key={id} className={link}>
                  <Link to={`/${id}`} className="focus:text-[#038bab]">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
