const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        form: '3fr 2fr',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
