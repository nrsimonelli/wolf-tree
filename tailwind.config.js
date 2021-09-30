const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      primary: colors.blueGray,
      secondary: colors.amber,
      accent: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
