/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'midnight': '#10101A',
      'white': '#FFFFFF',
      'gray': '#C4C4C4',
      'magenta': '#C662E8',
      'purple': '#AA80ED',
      'blue': '#909DF1'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      
    },
  },
  plugins: [],
}
