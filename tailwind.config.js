/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#75AADB',
        accent: '#1B2A38',
        background: '#F2F0E9',
        dark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['Montserrat', 'Satoshi', 'sans-serif'],
        serif: ['"Nanum Myeongjo"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
