/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-001": "#37DB6B",
        "theme-002": "#53E6CA",
      },
      animation: {
        "slow-bounce": "bounce 2s infinite", // 기본 bounce 애니메이션을 2초 동안
      },
    },
  },
  plugins: [],
};
