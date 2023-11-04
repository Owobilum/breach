/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-200": "#CF94FF",
      "primary-600": "#8311F9",
      "primary-700": "#6215F2",
      "grey-50": "#F8F8F8",
      "grey-100": "#F1F1F1",
      "grey-300": "#D6D6D6",
      "grey-600": "#6A6A6A",
      "grey-900": "#181818",
      white: "#FFFFFF",
      offWhite: "#FCFAFF",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "8xl": "90rem" /* 1440px */,
      },
      fontSize: {
        large: "5rem" /* 80px*/,
      },
      lineHeight: {
        11: "2.75rem" /* 44px */,
        large: "5.875rem" /* 94px */,
      },
      letterSpacing: {
        "2x-tighter": "-0.05rem" /* -0.8px */,
      },
    },
  },
  plugins: [],
};
