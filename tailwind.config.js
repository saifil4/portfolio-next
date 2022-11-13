/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#1864FF",
      },
    },
    fontFamily: {
      header: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
