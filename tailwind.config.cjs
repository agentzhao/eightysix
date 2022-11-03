/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#016d29",
        "light-green": "#90ee90",
        grey: "#64748b",
        light: "#f1f5f9",
        dark: "#1e293b",
      },
    },
  },
  plugins: [],
};
