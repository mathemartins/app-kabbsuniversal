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
        darkOrange: "#EB5757",
        mainBlack: "#000000",
        mainWhite: "#fff",
        darkestGrey: "#1E1E1E",
        darkestBlue: "#17152C",
        mainRed: "#CA6767",
        gradedBlue: "rgba(197, 202, 255, 0.2)",
        GreyOne: "#1E1F34",
        GreyTwo: "#41424F",
        greyFour: "#121212",
        greyThree: "#1D1D1D",
        greyFive: "#CFCFCF",
        greySix: "#F6F6F6",
        greySeven: "#EAEAEA",
        greyEight: "#F7F7F7",
        greyNine: "#4E4E4E",
        greyTen: "#606F7B",
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
