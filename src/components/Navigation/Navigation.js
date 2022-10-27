import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import NavList from './NavList';

import { navContainer } from './Nav.module.css';

const Navigation = ({ handleClick }) => {
  const { t } = useTranslation();
  const { nav } = t('header', { returnObjects: true });

  return (
    <nav className={navContainer}>
      <NavList navigation={nav} handleClick={handleClick} />
    </nav>
  );
};

export default Navigation;
