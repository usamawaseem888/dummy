/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myLightBlue: '#286A815C',
        myRed: '#CC4656',
        myGreen: '#437B45',
        myBlue: '#009ACD',
        myGray: '#D9D9D9'
      },
    },
  },
  plugins: [],
}

