/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        averta: ['AvertaStd', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#F1FAEC',
          //* Background
          100: '#E4F4D8',
          200: '#C9E9B1',
          //* Complement
          300: '#AEDF8B',
          400: '#93D464',
          //* Default
          500: '#78C93D',
          //* Hovered
          600: '#60A131',
          //* Active
          700: '#487925',
          800: '#305018',
          900: '#18280C',
        },
        secondary: {
          50: '#FEF5EB',
          //* Background
          100: '#FCEBD7',
          200: '#F9D7AF',
          //* Complement
          300: '#F7C287',
          400: '#F4AE5F',
          //* Default
          500: '#F19A37',
          //* Hovered
          600: '#C17B2C',
          //* Active
          700: '#915C21',
          800: '#603E16',
          900: '#301F0B',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
        dark: '#222222',
        light: '#F5F5F5',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
};
