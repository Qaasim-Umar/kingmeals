/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgimage: "url('/src/assets/icons/bg.svg')",
      },
      colors: {
        bggreen: "#087f5b",
        textgreen: "#20c997",
      },
    },
  },
  plugins: [],
};
