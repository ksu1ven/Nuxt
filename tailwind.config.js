/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");
import fluid, { extract } from "fluid-tailwind";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: {
    files: [
      "./app/components/**/*.vue",
      "./app/layouts/**/*.vue",
      "./app/pages/**/*.vue",
      "./app/{A,a}pp.vue",
      "./app/{E,e}rror.vue",
    ],
    extract,
  },
  darkMode: "selector",
  theme: {
    screens: {
      sm: "320px",
      m: "475px",
      md: "768px",
      800: "800px",
      lg: "1366px",
      1450: "1450px",
      l: "1700px",
      xl: "1920px",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      fontFamily: {
        body: ["Raleway", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },

      colors: {
        inherit: "inherit",
        yellow: "#E0AE5A",
        purple_hover: "#8C0D57",
        purple_light: "#E11D74",
        purple_dark: "#A5005E",
        pink_2: "#87004D",
        pink_light: "#FF2A6D",
        green: "#00E933",
        red: "#FF0000",
        grey: "#8A8A8A",
        grey_light: "#E7E7E7",
        grey_light_xxl: "#F1F1F1",
        grey_light_xl: "#D0D0D0",
        grey_light_l: "#CACACA",
        grey_light_m: "#ACACAC",
        grey_dark: "#9B9B9B",
        black: "#2A2A2A",
      },

      boxShadow: {
        base: "0px 0px 2.29px 0px #00000040",
      },
      maxWidth: {
        "1/2": "50%",
      },
      gridTemplateAreas: {
        layout: ["header", "main", "footer"],
      },
      gridTemplateRows: {
        aa1: "repeat(2, auto) 1fr",
        a1: "auto 1fr",
        "1a": "1fr auto",
        "1a1": "1fr auto 1fr",
        a11: "auto 1fr 1fr",
        "11a": "1fr 1fr auto",
        a1a: "auto 1fr auto",
        "1aa": "1fr repeat(2, auto)",
        a1aa: "auto 1fr repeat(2, auto)",
        full: "100%",
      },
      gridTemplateColumns: {
        aa1: "repeat(2, auto) 1fr",
        a1: "auto 1fr",
        "1a": "1fr auto",
        "1a1": "1fr auto 1fr",
        a11: "auto 1fr 1fr",
        "11a": "1fr 1fr auto",
        a1a: "auto 1fr auto",
        "1aa": "1fr repeat(2, auto)",
        a1aa: "auto 1fr repeat(2, auto)",
        full: "100%",
      },
    },
  },
  plugins: [
    fluid,
    plugin(function ({ addVariant }) {
      addVariant("fine", "@media (pointer: fine)");
    }),
  ],
};
