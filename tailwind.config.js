const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "custom-blue": {
      50: "#d1daff",
      100: "#b3beec",
      200: "#97a6e7",
      300: "#798ce4",
      400: "#637be4",
      500: "#4f6be9",
      600: "#4361ee",
      700: "#2644cc",
      800: "#1430ad",
      900: "#001b92",
    },
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        industrial: "'Industrial','sans-serif', serif",
        tessan: "'Tessan', 'sans-serif'",
        cupper: "'Cupper', 'sans-serif'",
        lorin: "'Lorin', 'sans-serif'",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
