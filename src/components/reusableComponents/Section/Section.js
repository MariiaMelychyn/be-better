import React from 'react';

import { position } from './Section.module.css';

const Section = ({
  children,
  className = '',
  id = '',
  backgroundClass,
  style,
}) => {
  return (
    <section
      style={style}
      className={`${className} relative z-0 ${position} ${backgroundClass}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
