import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import useMediaRules from 'helpers/getMedia';

const HeroBackground = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const media = useMediaRules();

  return (
    <>
      {media === 'mobile' && (
        <StaticImage
          layout="fullWidth"
          src="../../images/background/hero_mobile.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className="w-full h-full z-0 top-0"
        />
      )}
      {media === 'tablet' && (
        <StaticImage
          layout="fullWidth"
          src="../../images/background/hero_tablet.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className="w-full h-full z-0 top-0"
        />
      )}
    </>
  );
};

export default HeroBackground;
