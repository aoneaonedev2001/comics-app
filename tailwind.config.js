/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1261px" }
    },
    extend: {},
  },
  plugins: [],
  
}