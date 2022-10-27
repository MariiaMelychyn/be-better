import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { client } from './ClientHistory.module.css';

const ClientHistoryItem = ({ itemData }) => {
  const { i18n } = useTranslation();
  return (
    <div className="m-auto w-70 mb-5 flex flex-col justify-between text-left laptop:mb-4 desktop:w-[716px] desktop:flex-row">
      <div className="w-[173px]">
        <p className="text-2xl font-semibold mb-1">
          {itemData[`${i18n.language}Name`]}
        </p>
        <p className="text-likeGrey laptop:mb-4">
          {itemData[`${i18n.language}Position`]}
        </p>
      </div>
      <div className={client}>
        <p>{itemData[`${i18n.language}Text`]}</p>
      </div>
    </div>
  );
};

export default ClientHistoryItem;
