/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-nunito)']
      },
      colors: {
        seagreen: '#2ec4b6',
        richblack: '#011627',
        babypowder: '#fdfffc',
        redpantone: '#e71d36',
        orangepeel: '#ff9f1c'
      }
    },
  },
  plugins: [],
}
