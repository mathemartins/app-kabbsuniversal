/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#0D3BBE",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mainBlack: "#000000",
        mainWhite: "#fff",
        lightBlue: "rgba(13, 59, 190, 0.22);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xsm: "950px",
      md: "1060px",
      bg: "1200px",
      lg: "1400px",
      xl: "1900px",
    },
  },
  plugins: [],
};
