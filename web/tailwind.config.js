// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  future: {},
  // purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  purge: {},
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      secondary: {
        dark: '#627264',
        DEFAULT: '#75A999',
        light: '#9bc0b5',
        lighter: '#cde0da',
      },
    },
    extend: {},
  },
  variants: {},
  // plugins: {
  //   "@tailwindcss/jit": {},
  //   autoprefixer: {},
  // },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
