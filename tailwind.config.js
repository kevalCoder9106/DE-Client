/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cabin': ['Cabin'],
      'babe': ['Bebas Neue'],
      'work': ['Work Sans'],
      'abril': ['Abril Fatface']
    },
    extend: {
      colors: {
        'bg': '#EFF5F5',
        'header': '#D6E4E5',
        'font_1': '#EB6440',
        'font_2': '#497174'
      }
    },
  },
  plugins: [],
}