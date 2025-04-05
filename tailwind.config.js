/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseQuartz: '#F7CAC9',
        serenity: '#91A8D0',
        babyBlue: '#AEDFF7',
        skyBlue: '#C9EBFF',
        gridBlack: '#111111',
        offWhite: '#FAFAFA',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      backgroundImage: {
        "grid": 
         `linear-gradient(to right, #e2e2e2 1px, transparent 1px), 
         linear-gradient(to bottom, #e2e2e2 1px, transparent 1px)`,
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
    },
  },
  plugins: [],
}