import React, { useRef } from 'react';
import useObserver from './useObserver';

const ObserverWrapper = ({ component, fallback = null, className }) => {
  const container = useRef(null);
  const showElement = useObserver(container);

  return (
    <div className={className} ref={container}>
      {showElement ? component : fallback}
    </div>
  );
};

export default ObserverWrapper;
