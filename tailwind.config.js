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
        "main-color": "#c1c4ff",
      },
    },
  },
  plugins: [],
};
