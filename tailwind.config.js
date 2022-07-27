const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // purge: ["./pages/*.js"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        "bungee-shade": ["Bungee Shade"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
     
      },
      "dark",
      "luxury",
      "light",
      "business",
      "dracula"
    ],
  },

};