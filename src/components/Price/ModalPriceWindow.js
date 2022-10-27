import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import ModalWindow from 'components/ModalWindow';
import JustForm from 'components/Form/JustForm';

import {
  modalform,
  formtitle,
  formmargin,
  formtext,
  accenttext,
  price,
  checkbox,
  acceptmodal,
  underformtext,
  titleSuccess,
  textSuccess,
} from './Price.module.css';

const ModalPriceWindow = ({ hideModal, currentPrice, currentRate }) => {
  const [successMessage, setSuccessMessage] = React.useState(false);
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });
  const modalSuccess = t('modalSuccess', { returnObjects: true });

  return (
    <ModalWindow className={modalform} handleClose={hideModal}>
      {successMessage ? (
        <div>
          <h2 className={titleSuccess}>{modalSuccess.gratitude} </h2>
          <p className={textSuccess}>{modalSuccess.text}</p>
        </div>
      ) : (
        <>
          <h2 className={formtitle}>{form.greeting}</h2>
          <p className={formtext}>
            {form.packet}
            <span className={accenttext}>"{currentRate}"</span>
          </p>
          <p className={price}>{currentPrice}</p>
          <JustForm
            clickFrom={currentPrice}
            formClassname={formmargin}
            checkboxClassname={checkbox}
            classnameAccept={acceptmodal}
            openModal={setSuccessMessage}
          />
          <p className={underformtext}>{form.connection}</p>
        </>
      )}
    </ModalWindow>
  );
};

ModalPriceWindow.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentPrice: PropTypes.string.isRequired,
  currentRate: PropTypes.string.isRequired,
};
export default ModalPriceWindow;
