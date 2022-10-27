import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import icons from 'images/sprite.svg';

const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleButtonUp);

    return () => {
      window.removeEventListener('scroll', toggleButtonUp);
    };
  }, []);

  const toggleButtonUp = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  if (showButton) {
    return (
      <button
        type="button"
        className="hidden desktop:block fixed right-20 bottom-11 z-20"
        onClick={() => animateScroll.scrollToTop()}
      >
        <svg width={44} height={44}>
          <use href={`${icons}#button-up`} />
        </svg>
      </button>
    );
  } else {
    return null;
  }
};

export default ButtonUp;
