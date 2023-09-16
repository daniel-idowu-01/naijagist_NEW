/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-dye': '#133c55ff',
        'bice-blue': '#386fa4ff',
        'picton-blue': '#59a5d8ff',
        'pale-azure': '#84d2f6ff',
        'non-photo-blue': '#91e5f6ff'
      },
      width: {
        500: '500px',
      }
    },
  },
  plugins: [],
}