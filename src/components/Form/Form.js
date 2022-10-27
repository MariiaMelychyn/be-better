import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Heading from 'components/reusableComponents/Heading';
import ModalWindow from 'components/ModalWindow';
import JustForm from './JustForm';

import { modalsuccess, modaltitle, modaltext } from './Form.module.css';

const Form = ({
  clickFrom = '',
  formClassname = '',
  checkboxClassname = 'mb-3',
  classnameAccept = '',
}) => {
  const [successModal, setSuccessModal] = React.useState(false);

  const { t } = useTranslation();
  const modalSuccess = t('modalSuccess', { returnObjects: true });

  return (
    <>
      {successModal ? (
        <ModalWindow
          className={modalsuccess}
          handleClose={() => setSuccessModal(false)}
        >
          <div>
            <Heading
              tag="h2"
              className={modaltitle}
              text={modalSuccess.gratitude}
            />
            <p className={modaltext}>{modalSuccess.text}</p>
          </div>
        </ModalWindow>
      ) : (
        <JustForm
          openModal={setSuccessModal}
          clickFrom={clickFrom}
          formClassname={formClassname}
          checkboxClassname={checkboxClassname}
          classnameAccept={classnameAccept}
        />
      )}
    </>
  );
};

Form.propTypes = {
  clickFrom: PropTypes.string,
  formClassname: PropTypes.string,
  checkboxClassname: PropTypes.string,
  classnameAccept: PropTypes.string,
};

export default Form;
