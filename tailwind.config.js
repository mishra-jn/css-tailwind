module.exports = {
  purge: {
  	enabled: true,
  	content: ['public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		primary: '#E27D60',
    		secondary: {
    			1: '#C38D9E',
    			2: '#E8A87C'
    		}
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
