/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-001": "#37DB6B",
        "theme-002": "#53E6CA",
      },
    },
  },
  plugins: [],
};
