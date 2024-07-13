/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],

        bodoni: ['Cinzel', 'serif'],

        raleway: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [],
};


