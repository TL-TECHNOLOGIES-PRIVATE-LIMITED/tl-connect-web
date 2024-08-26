/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-md': '1024px',
        "gk-d":"1180px",
      },
    },
  },
  plugins: [],
}