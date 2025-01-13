/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%':{top: -6},
          '50%':{top: 6},
          '100%':{top: -6},
        },
        wiggle: {
          '0%, 100%':{transform: 'rotate(-2deg)'},
          '50%':{transform: 'rotate(2deg)'},
        }
      },
      animation:{
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      }
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "Calibri"],
      Urbanist: ["Urbanist", "San serif"],
      Jost: ["Jost", "San serif"],
      DynaPuff: ["DynaPuff", "serif"],
      Annie: ["Annie Use Your Telescope", "San serif"],
    },
  },
  plugins: [],
}

