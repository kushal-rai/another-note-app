/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "#F2EBFB",
        "purple-500": "#9667E0",
        "purple- 800": "#062726",
      },
      fontFamily: {
        sans: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
