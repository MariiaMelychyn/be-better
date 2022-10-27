import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from 'components/reusableComponents/Button';
import { preloadModalPriceWindow } from 'services/preloader';

import {
  subscription,
  priceStyle,
  economyStyle,
  buttonStyled,
} from './Price.module.css';

const PriceCard = ({ priceData = {}, onClick }) => {
  const { t, i18n } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const price = t('price', { returnObjects: true });

  const economy = Boolean(priceData.economy) ? 'opacity-100' : 'opacity-0';
  return (
    <>
      <p className={subscription}>
        {priceData[`${i18n.language}Subscription`]}
      </p>
      <p className={priceStyle}>${priceData.price}</p>
      <p className={`${economy} ${economyStyle} `}>
        {price.economy} ${priceData.economy}
      </p>

      <p className="mb-2 font-medium desktop:text-xl">
        {priceData[`${i18n.language}Month`]}
      </p>
      <p className="mb-6 text-likeGrey text-sm desktop:text-base ">
        {priceData[`${i18n.language}Hour`]}
      </p>

      <Button
        id={`button-price-${priceData.id}`}
        type="button"
        className={buttonStyled}
        doAction={() => onClick(priceData.price)}
        onMouseOver={preloadModalPriceWindow}
        onTouchStart={preloadModalPriceWindow}
      >
        {buttonTranslate.button}
      </Button>
    </>
  );
};

export default PriceCard;
PriceCard.propTypes = {
  priceData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
