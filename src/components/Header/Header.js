import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Navigation from 'components/Navigation';
import SwitchLang from 'components/SwitchLang';

import {
  header,
  headerContainer,
  link,
  icon,
  burgerMenuActive,
  burgerMenuClose,
  burgerMenuButton,
  burgerMenuLines,
} from './Header.module.css';

import { handleMenuClickPreload } from 'services/preloader';

import icons from 'images/sprite.svg';

const BurgerMenu = loadable(() => import('./BurgerMenu'));

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const firstClickOnButton = useRef(true);

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
    if (!showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (firstClickOnButton.current) {
      firstClickOnButton.current = false;
      handleMenuClickPreload();
      return;
    }
  };

  const preload = () => {
    BurgerMenu.preload();
  };

  return (
    <header className={header} id="#home">
      <div className={headerContainer}>
        <Link to="#home" className={link}>
          <svg className={icon}>
            <use href={`${icons}#logo`} />
          </svg>
        </Link>
        <Navigation />
        <SwitchLang />
        <div
          className={
            showNav
              ? `${burgerMenuActive} ${burgerMenuClose}`
              : `${burgerMenuClose}`
          }
        >
          <button
            type="button"
            className={burgerMenuButton}
            onClick={toggleNav}
            onMouseOver={preload}
            onTouchStart={preload}
          >
            <span className={burgerMenuLines}></span>
          </button>
        </div>
      </div>
      {showNav && <BurgerMenu toggleNav={toggleNav} />}
    </header>
  );
};

export default Header;
