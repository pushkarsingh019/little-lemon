/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'yellow-color' : '#F4CE14',
        'green-color' : '#495E57',
        'grey-color' : '#EDEFEE',
        'black-color' : '#333333',
      }
    },
  },
  plugins: [],
}