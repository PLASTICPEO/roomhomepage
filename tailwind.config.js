/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        League: ["League Spartan", "sans-serif"],
        Ojuju: ["Ojuju", "sans-serif"],
      },
    },
  },
  plugins: [],
};
