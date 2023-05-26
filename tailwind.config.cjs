const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
		  fontSize: {/*mujahidul*/
			  'xs': '.75rem',
			  'xsl':'0.8rem',
			  'sm': '.875rem',
			  'tiny': '.95rem',
			   'base': '1rem',
			   'lg': '1.125rem',
			   'xl': '1.25rem',
			   '2xl': '1.5rem',
			  '3xl': '1.875rem',
			  '4xl': '2.25rem',
			   '5xl': '3rem',
			   '6xl': '4rem',
			  '7xl': '5rem',
			 },
		  colors: {
        'white': '#FFFFFF',
        'cobalt': '#1F2937',
        'midnight': '#111827',
        'fog': '#EFEFF0',
        'black': '#000000',
        'iron': '#D1D5D6', 
        'red': '#FF0033',
        'rock': '#3C4652',
        'steel': '#454D59',
        'stormy': '#444D58',
        'porcelain': '#F9FAFB',
        'gunmetal': '#B7BABE', 
        'silvery': '#f0f1f3',
        'gret': '#4B5563', 
        'ocean': '#649AB3',
        'smolder': '#F8F9FD',
        'groy': '#F8F8F8',
        
        'darkfox-dark': '#0F1155',
        'darkfox-primary': '#2328C2',
        'darkfox-accent': '#120733',
        'darkfox-ash': '#CDCAD4',
        'darkfox-gray': '#716A85',
        'darkfox-light-gray': '#FBFBFC',
        'darkfox-medium-gray': '#F8F8F9',
        'darkfox-semidark-gray': '#4A4657',
        'darkfox-semidark-gray-muj': '#4B4658',
        'darkfox-grid-border-color' : '#DEE1FF',
        'darkfox-title-bg-color' : '#F6F7FB',
        'darkfox-gray-border' : '#dbdbdb',
        'darkfox-complimentary': '#F4F7FF',
        'darkfox-blue': '#2744DC',
        'darkfox-very-light-blue': '#E5EBFC',
        'darkfox-light-blue': '#b9ccff',
        'darkfox-dominant': '#2328C2',
        'darkfox-purple-strong': '#6630FF',
        'darkfox-purple': '#967BEE',
        'darkfox-purple-light': '#E6E7FF',
        'darkfox-danger': '#E0444F',

        'darkfox-pipeline': '#5A88FF',
        'darkfox-portfolio': '#294BFF',
        'darkfox-closed-deals': '#17A2C1',
        'darkfox-dead-deals': '#FF8038',
        
        'darkfox-aromatic': '#716A85',
        'darkfox-aromatic-30': '#D4D2DA',
        'darkfox-aromatic-15': '#e9e8ec',
        'darkfox-dark-green': '#008A9A',

        'darkfox-tc-dark' : '#120733',
        'darkfox-tc-medium': '#3B3356',
        'darkfox-tc-light' : '#716A85',
			}
    },
  },
  variants: {
    extend: {
    backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
	  require('@tailwindcss/typography'),
	  require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
};

module.exports = config;
