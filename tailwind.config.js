

const defaultTheme = require('tailwindcss/defaultTheme')



//colour picker on front end
//pass in values to theme

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // purge: ["./pages/*.js"],
  theme: {
    extend: {
      screens: {
        xs: '375px',
       
        ...defaultTheme.screens,
      },
      fontFamily: {
        'bungee-shade': ['Bungee Shade'],
        arvo: ['Arvo'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        lava: {
          "primary": '#f56967',
          "primary-content":'#fa7268',
          "primary-focus": '#ef5f67',
                    
          
           
          "secondary": '#e34c67',
          "secondary-focus":"#e34c67",
          "secondary-content": "#e95667",       
          
           
          "accent": '#ce2e68',
                    "accent-focus": '#c62368',
                    "accent-content": '#d53867',
          
           
          "neutral": "#282334",
          "base-100": "#282046",
          "info": "#9FAFF4",
          "success": "#16B653",
          "warning": "#B0740C",
          "error": "#E95D75",
                    },
      },
      {lofi: {  ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
      primary: "blue",
          "primary-focus": "mediumblue",}},
  
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
    
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
  
      {dracula: {  ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
      primary: "red",
          "primary-light": "mediumblue",}},
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],

  },
}
