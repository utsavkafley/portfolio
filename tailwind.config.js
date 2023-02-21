/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#293241",
        "light": "#fffffa",
        "primary": "#33658A",
        "secondary": "#76877D",
        "positive": "#317B22",
        "negative": "#ee6c4d",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
