const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      black: colors.black
    },
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#ff4081',
        'success': '#4caf50',
        'info': '#2196f3',
        'warning': '#ffeb3b',
        'danger': '#f44336',
        'light': '#f4f4f4',
        'dark': '#212121',
        'gray': '#BFCBC2',
        'snowWhite': '#f4eded',
        'prussianBlue': '#022f40',
        'englishViolet': '#44344f',
        'asumicha': '#373C38',
        'kincha': '#C7802D',
        'yamabuki': '#FFB11B',
      },
      brightness: {
        65: '.65',
      },
      boxShadow: {
        'glow': '0 0 8px',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
