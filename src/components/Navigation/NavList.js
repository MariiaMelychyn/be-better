import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import { links, active } from './Nav.module.css';

import { handleMenuClickPreload } from 'services/preloader';

const NavList = ({ navigation }) => {
  return (
    <ul className="flex">
      {navigation.map(({ id, name }) => (
        <li key={id} className="cursor-pointer">
          <Link
            to={`${id}`}
            spy={true}
            smooth={true}
            offset={-80}
            className={links}
            activeClass={active}
            href={`${id}`}
            onMouseOver={handleMenuClickPreload}
            onTouchStart={handleMenuClickPreload}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

NavList.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default NavList;
