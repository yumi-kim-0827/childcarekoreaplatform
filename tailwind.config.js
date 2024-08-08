/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // gap: {
      //   base: "10px",
      // },
      colors: {
        "font-white": "#ffffff",
        "font-gray": "#dddddd",
        "dark-purple": "#8354D4",
        "sweat-purple": "#9477FF",
        "sweat-orange": "#FFC261",
        "sweat-yellow": "#FEF6A3",
        "light-gray": "#EDF5FF",
        "light-pink": "#FFC3F7",
        "light-skyblue": "#A3CFFF",
      },
    },
  },
  plugins: [],
};
