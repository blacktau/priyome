/** @type {import('tailwindcss').Config} */

const { default: daisyui } = require('daisyui')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.html", "./**/*.templ", "./**/*.go",],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        mobile: "2rem",
        tablet: "4rem",
        desltop: "5rem",
      }
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.gray,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark', 'forest', 'retro', 'valentine', 'night', 'fantasy']
  }
}

