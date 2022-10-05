/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.jsx",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        // 'sm': "600px",
        'md': "600px",
      },
    },
  },
  plugins: [],
}
