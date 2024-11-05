/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      personalized: '0 0 10px #ccc'
    },
    scale: {
      personalized: '1.02'
    },
    extend: {},
  },
  plugins: [],
}