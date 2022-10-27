import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.css';

const Button = ({ children, className = '', doAction = null, ...props }) => {
  return (
    <button className={`${button} ${className}`} onClick={doAction} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
