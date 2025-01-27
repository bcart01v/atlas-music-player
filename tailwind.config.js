module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Bears Colors, as it should be.
        primary: {
          light: '#F77300',
          DEFAULT: '#C83803',
          dark: '#8C2A02',
        },
        secondary: {
          light: '#435775',
          DEFAULT: '#0B162A',
          dark: '#020B14',
        },
        lightBackground: '#FFFFFF',
        darkBackground: '#0B162A',
        lightText: '#0B162A',
        darkText: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};