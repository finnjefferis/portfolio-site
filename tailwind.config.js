

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
        // mytheme: {
          

 
        //   "primary": primaryColor,
                    
          
           
        //   "secondary": secondaryColor,
                    
          
           
        //   "accent": accentColor,
                    
          
           
        //   "neutral": "#282334",
                    
          
           
        //   "base-100": "#282046",
                    
          
           
        //   "info": "#9FAFF4",
                    
          
           
        //   "success": "#16B653",
                    
          
           
        //   "warning": "#B0740C",
                    
          
           
        //   "error": "#E95D75",
        //             },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
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
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
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
