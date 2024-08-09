/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-white": "#ffffff",
        "light-gray": "#EDF5FF",
        "dark-gray": "#333333",
        "dark-purple": "#8354D4",
        "sweat-purple": "#9477FF",
        "sweat-orange": "#FFC261",
        "sweat-yellow": "#FEF6A3",
        "light-pink": "#FFC3F7",
        "light-skyblue": "#A3CFFF",
        "dark-blue": "#60AAFA",
      },
    },
  },
  plugins: [],
};
