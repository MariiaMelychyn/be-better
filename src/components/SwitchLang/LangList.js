import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { list, item } from './SwitchLang.module.css';
import { normalizeLang } from './SwitchLang';

const LangList = () => {
  const { languages, originalPath } = useI18next();

  return (
    <>
      <ul className={list}>
        {languages.map(lng => (
          <li key={lng} className={item}>
            <Link to={originalPath} language={lng}>
              {normalizeLang(lng)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LangList;
