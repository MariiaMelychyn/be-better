import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { backdrop, modal, icon } from './ModalWindow.module.css';

import sprite from 'images/sprite.svg';

const ModalWindow = ({ children, className = '', handleClose }) => {
  const onClose = useCallback(
    e => {
      if (e.code === 'Escape' || e.target.id === 'modal-backdrop') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onClose);
    window.addEventListener('click', onClose);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onClose);
      window.removeEventListener('click', onClose);
      document.body.style.overflow = '';
    };
  }, [onClose, handleClose]);

  return (
    <div className={backdrop} id="modal-backdrop">
      <div className={`${modal} ${className}`}>
        {children}
        <button className={icon} type="button" onClick={handleClose}>
          <svg width="28px" height="28px">
            <use href={`${sprite}#close`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  className: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

export default ModalWindow;
