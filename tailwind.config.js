const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      spacing: {
        44: '44%',
        9: '9%',
        '10%': '10%',
        '12%': '12%',
        '60%': '60%',
        icon: '20%',
        iconPercentTr: '30%',
        iconPercentTrF: '45%',
      },
      boxShadow: {
        you: '0px 1px 2px rgba(1, 66, 82, 0.3), 0px 1px 3px 1px rgba(1, 66, 82, 0.15)',
        formInput: 'inset 0px -1px 3px 1px rgba(0, 0, 0, 0.15)',
      },
      translate: {
        yS: '15%',
      },

      lineHeight: {
        1.36: '1.36',
      },
      padding: {
        4.5: '18px',
        6.5: '26px',
        13: '52px',
        15: '60px',
        23: '98px',
        30: '120px',
        46: '188px',
        54: '218px',
        74: '296px',
      },
      margin: {
        6.5: '26px',
        13: '52px',
        17.5: '70px',
        22: '92px',
        50: '200px',
        74: '296px',
      },
      fontFamily: {
        caveat: 'Caveat,sans-serif',
      },
      fontSize: {
        28: ['28px', '48px'],
        32: ['32px', '48px'],
        34: ['34px', '46.3px'],
        59: ['59px', '80px'],
      },
      width: {
        50: '200px',
        70: '280px',
        81: '324px',
        480: '480px',
        524: '524px',
        630: '630px',
        648: '648px',
        768: '768px',
        1036: '1036px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#00a5cc',
      black: '#05202c',
      white: '#fafcfc',
      hoverPrice: '#e5fbff',
      likeGrey: '#9ac9d4',
      background: '#f5f9fa',
      backgroundSecond: '#fff8f4',
      bright: '#adf0fe',
      mainLight: '#cfedf3',
      orangeContrast: '#fbf1eb',
      error: '#e74a3b',
      mainSecond: '#ef7229',
      mainSecondLight: '#ff9b62',
      orangeDark: '#4d2107',
      orangeDirty: '#f3ae86',
      realWrite: '#fff',
      iconBg: '#dcf2f6',
      buttonMobile: '#01bbd4',
      oferta: '#fff8f4',
      stepsOne: '#27b6d8',
      stepsTwo: '#41c1df',
      stepsThree: '#5dcee7',
      stepsFour: '#7fdcf1',
      stepsFive: '#9de9fa',
      stOne: '#f17c39',
      stTwo: '#f38f55',
      stThree: '#f59e6b',
      stFour: '#f7b188',
      stFive: '#f9c6a8',
      stSix: '#fcd9c4',
    },
    screens: {
      tablet: '320px',
      // => @media (min-width: 320px) { ... }
      laptop: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      //@media (min-width: 1024px) { ... }
      desktop: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, addComponents, theme }) => {
      addComponents({
        '.btn-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.main'),
          display: 'block',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.36,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        '.title-primary': {
          color: theme('colors.main'),
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.title-secondary': {
          color: theme('colors.orangeDark'),
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.text-caveat': {
          color: theme('colors.main'),
          fontFamily: 'Caveat,sans-serif',
          fontSize: 24,
          lineHeight: 1.36,
          letterSpacing: 0.25,
        },
        '.text-change': {
          fontFamily: 'Caveat,sans-serif',
          fontSize: 24,
          lineHeight: 1.36,
          letterSpacing: 0.25,
        },
        '.text-oferta': {
          color: theme('colors.orangeDark'),
          fontFamily: 'Open Sans,sans-serif',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 27,
          letterSpacing: 0.25,
        },
        '.stair-icons': {
          width: '32px',
          height: '32px',
          margin: 'auto',
        },
        '.stair-iconsBg': {
          width: '66px',
          height: '66px',
          margin: 'auto',
          position: 'absolute',
        },
        '.stair-container-svg': {
          width: '66px',
          height: '66px',
          margin: 'auto',
          position: 'absolute',
        },
        '.icons-step': {
          width: '200px',
          height: '128px',
          margin: 'auto',
          position: 'absolute',
        },
      });
    }),
  ],
};
