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
          '0%':{top: -4},
          '50%':{top: 4},
          '100%':{top: -4},
        },
        banner_float: {
          '0%':{top: -6},
          '50%':{top: 6},
          '100%':{top: -6},
        },
        wiggle: {
          '0%, 100%':{transform: 'rotate(-1deg)'},
          '50%':{transform: 'rotate(1deg)'},
        },
        banner_wiggle: {
          '0%, 100%':{transform: 'rotate(-7deg)'},
          '50%':{transform: 'rotate(7deg)'},
        }
      },
      animation:{
        float: "float 6s ease-in-out infinite",
        banner_float: "float 5s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        banner_wiggle: "wiggle 4s ease-in-out infinite",
      }
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "Calibri"],
      Urbanist: ["Urbanist", "San serif"],
      Jost: ["Jost", "San serif"],
      DynaPuff: ["DynaPuff", "serif"],
      Annie: ["Annie Use Your Telescope", "San serif"],
      Elsie: ["Elsie Swash Caps", "San serif"],
      Grand: ["Grandstander", "San serif"],
      Lexend: ["Lexend Exa", "San serif"],
    },
  },
  plugins: [],
}

