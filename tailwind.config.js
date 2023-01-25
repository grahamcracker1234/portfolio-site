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
      'black': '#000000',
      'midnight': '#10101A',
      'evening': '#1D1D2F',
      'white': '#FFFFFF',
      'gray': '#C4C4C4',
      'dark-gray': '#858585',
      'magenta': '#C662E8',
      'purple': '#AA80ED',
      'blue': '#909DF1'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        loop: {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
            transform: "translateX(-50%)"
          }
        },
        wave: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "50%": {
            transform: "rotate(0deg)"
          },
          "55%": {
            transform: "rotate(14deg)"
          },
          "60%": {
            transform: "rotate(-8deg)"
          },
          "65%": {
            transform: "rotate(14deg)"
          },
          "70%": {
            transform: "rotate(-4deg)"
          },
          "75%": {
            transform: "rotate(10deg)"
          },
          "80%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          },
        }
      },
    },
    plugins: [],
  }
}