/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
      colors: {
        cdpLogoBlue: '#0f3c5f',
        primary: '#003a6a', // The main blue
        accent: '#ffd200', // The yellow/gold
      }
    },
  },
  plugins: [],
}
