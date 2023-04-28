const defaultTheme = require('tailwindcss/defaultTheme')

// this function handles the opacity of color
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

//colour picker on front end
//pass in values to theme

//cant rebuild tailwind config during runtiemme

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
      colors: {
        'gradient-100': withOpacityValue('--gradient-100'),
        'gradient-200': withOpacityValue('--gradient-200'),
        'gradient-300': withOpacityValue('--gradient-300'),
        'gradient-400': withOpacityValue('--gradient-400'),
        'gradient-500': withOpacityValue('--gradient-500'),
        'gradient-600': withOpacityValue('--gradient-600'),
        'gradient-700': withOpacityValue('--gradient-700'),
        'gradient-800': withOpacityValue('--gradient-800'),
        'gradient-900': withOpacityValue('--gradient-900'),
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        lava: {
          '--gradient-100': '4, 94%, 69%',
          '--gradient-200': '1, 88%, 68%',
          '--gradient-300': '357, 82%, 65%',

          '--gradient-400': '353,77%,63%',
          '--gradient-500': '349,73%,59%',

          '--gradient-600': '346,69%,56%',
          '--gradient-700': '342, 63%, 53%',
          '--gradient-800': '338, 65%, 49%',
          '--gradient-900': '335, 70%, 46%',

          primary: '#f56967',
          'primary-content': '#fa7268',
          'primary-focus': '#ef5f67',
          '--primary-cool': '338 83% 66%',

          secondary: '#e34c67',
          'secondary-focus': '#e34c67',
          'secondary-content': '#e95667',

          accent: '#ce2e68',
          'accent-focus': '#c62368',
          'accent-content': '#d53867',

          neutral: '#282334',
          'base-100': '#282046',
          info: '#9FAFF4',
          success: '#16B653',
          warning: '#B0740C',
          error: '#E95D75',
          '--100': '50, 53%, 34%',
        },

        marine: {
          '--gradient-100': '155, 100%, 50%',
          '--gradient-200': '155, 95%, 45%',
          '--gradient-300': '158, 90%, 40%',

          '--gradient-400': '161, 88%, 37%',
          '--gradient-500': '164, 88%, 34%',

          '--gradient-600': '167, 88%, 35%',
          '--gradient-700': '170, 86%, 36%',
          '--gradient-800': '170, 83%, 31%',
          '--gradient-900': '170, 80%, 26%',

          secondary: '#e34c67',
          'secondary-focus': '#e34c67',
          'secondary-content': '#e95667',

          neutral: '#282334',
          'base-100': '#282046',
          info: '#9FAFF4',
          success: '#16B653',
          warning: '#B0740C',
          error: '#E95D75',
          '--200': '50, 53%, 34%',
        },
      },
      {
        lofi: {
          ...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
          '--gradient-100': '210, 8%, 37%',
          '--gradient-200': '210, 8%, 32%',
          '--gradient-300': '210, 10%, 27%',

          '--gradient-400': '210, 12%, 22%',
          '--gradient-500': '210, 14%, 17%',

          '--gradient-600': '210, 20%, 12%',
          '--gradient-700': '170, 16%, 7%',
          '--gradient-800': '170, 18%, 5%',
          '--gradient-900': '170, 20%, 2%',
        },
      },
      {
        corporate: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          '--gradient-100': ' 229 96% 74%',
          '--gradient-200': ' 229 94% 69%',
          '--gradient-300': ' 229 92% 65%',

          '--gradient-400': '210, 90%, 61%',
          '--gradient-500': '210, 88%, 57%',

          '--gradient-600': '13, 84%, 52%',

          '--gradient-700': '13 80% 53%',
          '--gradient-800': '13 80% 58%',
          '--gradient-900': '13 80% 63%;',
        },
      },
      {
        forest: {
          ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
          '--gradient-100': ' 141 72% 42%',
          '--gradient-200': ' 229 94% 69%',
          '--gradient-300': ' 229 92% 65%',
          '--gradient-400': '210, 12%, 22%',
          '--gradient-500': '210, 14%, 17%',

          '--gradient-600': '210, 20%, 12%',
          '--gradient-700': '13 80% 53%',
          '--gradient-800': '13 80% 58%',
          '--gradient-900': '13 80% 63%;',
        },
      },

      'synthwave',

      'forest',

      'fantasy',

      'black',

      {
        dracula: {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          '--gradient-100': '31, 98%, 67%',
          '--gradient-200': '31, 96%, 62%',
          '--gradient-300': '31, 94%, 57%',
          '--gradient-400': '31, 92%, 52%',
          '--gradient-500': '31, 90%, 47%',

          '--gradient-600': '265 69% 63%',
          '--gradient-700': '265 65% 58%',
          '--gradient-800': '265 64% 53%',
          '--gradient-900': '265 59% 48%',
        },
      },

      'autumn',
      {
        business: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          '--gradient-100': '31, 100%, 67%',
          '--gradient-200': '31, 100%, 62%',
          '--gradient-300': '31, 100%, 57%',
          '--gradient-400': '31, 95%, 52%',
          '--gradient-500': '20, 90%, 50%',

          '--gradient-600': '20, 90%, 50%',
          '--gradient-700': '13 85% 50%',
          '--gradient-800': '13 80% 48%',
          '--gradient-900': '13 75% 42%;',
        },
      },

      'coffee',
      'winter',
    ],
  },
}
