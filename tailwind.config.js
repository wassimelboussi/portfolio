/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '0': '0',
        '1/2': '50%',
        'full': '100%',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        yellow: '#FDE68A',
      },
    },
  },
  plugins: [],
}