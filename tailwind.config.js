/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Josefin: ["Josefin Sans", "Calibri"],
      Urbanist: ["Urbanist", "San serif"],
      Jost: ["Jost", "San serif"],
    },
  },
  plugins: [],
}

