/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right'
          }
        }
      },
      fontFamily: {
        mono: ['var(--font-nunito)']
      },
      colors: {
        seagreen: '#2ec4b6',
        richblack: '#011627',
        babypowder: '#fdfffc',
        redpantone: '#e71d36',
        orangepeel: '#ff9f1c'
      },
      screens: {
        '3xl': '1600px'
      }
    },
  },
  plugins: [],
}
