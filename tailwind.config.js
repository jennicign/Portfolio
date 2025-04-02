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
        gridBlack: '#111111',
        offWhite: '#FAFAFA',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      backgroundImage: {
        "grid": "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "20px 20px",
      },
    },
  },
  plugins: [],
}