/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        headerGreen: 'rgba(131, 225, 11, 0.22)',
        btnGreen: '#00A359',
        lightGray: '#F5F5F5',
        darkGray: '#D9D9D9',
      },
    },
  },
  plugins: [],
}

