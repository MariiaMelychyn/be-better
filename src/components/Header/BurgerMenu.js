import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';

import { menuBg, menuList, menuItem, menuLink } from './Header.module.css';
import Backdrop from 'components/reusableComponents/BackDrop';

const BurgerMenu = ({ toggleNav }) => {
  const { t } = useTranslation();
  const { nav, toMain } = t('header', { returnObjects: true });

  return (
    <>
      <div className={menuBg}>
        <ul className={menuList}>
          {nav.map(({ id, name }) => (
            <li key={id} className={menuItem}>
              <Link
                to={`${id}`}
                smooth
                spy
                offset={-52}
                className={menuLink}
                onClick={toggleNav}
                href={`${id}`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li key={toMain} className={menuItem}>
            <Link
              to={'home'}
              smooth
              spy
              className={menuLink}
              onClick={toggleNav}
              href="home"
            >
              {toMain}
            </Link>
          </li>
        </ul>
      </div>
      <Backdrop onClose={toggleNav} />
    </>
  );
};

BurgerMenu.propTypes = {
  toggleNav: PropTypes.func.isRequired,
};

export default BurgerMenu;
