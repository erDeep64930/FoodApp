/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        rubik: ["Rubik Microbe", "cursive"],
      },
    },
  },
  plugins: [],
};
