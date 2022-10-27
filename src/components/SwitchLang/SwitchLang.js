import React, { useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { switcher } from './SwitchLang.module.css';

import ArrowIcon from 'images/dropdown.inline.svg';

import LangList from './LangList';
import Backdrop from 'components/reusableComponents/BackDrop';

export const normalizeLang = language =>
  language === 'uk' ? 'UA' : language.toUpperCase();

const SwitchLang = () => {
  const { language } = useI18next();
  const [dropdown, setDropdown] = useState(false);

  const toggle = () => {
    setDropdown(p => !p);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={switcher}
        onClick={toggle}
        disabled={dropdown}
      >
        <span>{normalizeLang(language)}</span>
        <ArrowIcon />
      </button>
      {dropdown && (
        <>
          <LangList />
          <Backdrop onClose={toggle} transparent />
        </>
      )}
    </div>
  );
};

export default SwitchLang;
