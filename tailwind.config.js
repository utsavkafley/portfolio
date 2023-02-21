/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#2F4858",
        "light": "#EBEBEB",
        "primary": "#33658A",
        "secondary": "#76877D",
        "positive": "#317B22",
        "negative": "#D1603D",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
