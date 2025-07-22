/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#8DC63F',
          600: '#6fa82e',
          800: '#2d5012',
        },
      },
      height: {
        '500': '500px',
      },
    },
  },
  plugins: [],
} 