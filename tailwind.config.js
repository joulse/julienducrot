module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'polar-night': {
          600: '#2e3440',
          DEFAULT: '#3b4252',
          400: '#434c5e',
          300: '#4c566a',
        },
        'snow-storm': {
          DEFAULT: '#d8dee9',
          400: '#e5e9f0',
          300: '#eceff4',
        },
        frost: {
          600: '#8fbcbb',
          DEFAULT: '#88c0d0',
          400: '#81a1c1',
          300: '#5e81ac',
        },
        aurora: {
          700: '#bf616a',
          600: '#d08770',
          DEFAULT: '#ebcb8b',
          400: '#a3be8C',
          300: '#b48ead',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
