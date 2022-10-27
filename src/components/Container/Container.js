import React, { useEffect, useRef } from 'react';

// import { wrapper } from './Container.module.css';

const Container = ({ children, className = '', getRef }) => {
  const container = useRef(null);
  useEffect(() => {
    if (!container.current || !getRef) return;
    getRef(container);
  }, [getRef]);

  return (
    <div
      ref={container}
      className={`container text-center m-auto max-w-xs h-full laptop:max-w-3xl  desktop:max-w-screen-desktop ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
