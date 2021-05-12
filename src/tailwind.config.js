const {
  amber,
  blueGray,
  coolGray,
  warmGray,
  orange,
  lime,
  lightBlue,
  emerald,
  teal,
  cyan,
  violet,
  fuchsia,
  rose,
  trueGray,
} = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans'],
      poppins: ['Poppins', 'sans'],
      montserrat: ['Montserrat', 'sans'],
      dank: ['Dank Mono', 'Fira Code', 'sans'],
      questrial: ['Questrial', 'sans'],
      dm: ['DM Sans', 'sans'],
    },
    extend: {
      colors: {
        blueGray,
        coolGray,
        trueGray,
        warmGray,
        orange,
        lime,
        emerald,
        teal,
        cyan,
        lightBlue,
        violet,
        fuchsia,
        rose,
        amber,
      },
    },
    variants: {},
    plugins: [],
  },
}
