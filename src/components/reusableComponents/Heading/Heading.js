import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag, text, className }) => {
  const Tag = tag || 'h1';

  return <Tag className={className}>{text}</Tag>;
};

export default Heading;

Heading.propTypes = {
  tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
