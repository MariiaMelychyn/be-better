import React from 'react';
import PropTypes from 'prop-types';

import { list, link } from './Social.module.css';

import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Social = ({ classNameList = '', classNameLink = '' }) => {
  return (
    <ul className={`${list} ${classNameList}`}>
      <li id="link-instagram">
        <a
          className={`${link} ${classNameLink}`}
          href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label="instagram"
        >
          <FaInstagram size={24} />
        </a>
      </li>
      <li id="link-facebook">
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.facebook.com/Yuliya.Shayenko"
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label="facebook"
        >
          <FaFacebookF size={24} />
        </a>
      </li>
      <li id="link-linkedin">
        <a
          className={`${link} ${classNameLink}`}
          href="https://www.linkedin.com/in/yshayenko/"
          target="blank"
          rel="noreferrer noopener nofollow"
          aria-label="linkedin"
        >
          <FaLinkedinIn size={24} />
        </a>
      </li>
    </ul>
  );
};

Social.propTypes = {
  classNameList: PropTypes.string,
  classNameLink: PropTypes.string,
};

export default Social;
