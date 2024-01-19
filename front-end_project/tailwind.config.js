/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1170px",
      xxl: "1496px",
    },
    fontFamily: {
      sans: ['"Roboto"', "sans-serif"],
    },
  },
  extend: {
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
  important: true,
};
