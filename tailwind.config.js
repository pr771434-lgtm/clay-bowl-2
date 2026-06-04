/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          100: '#F5E6E1',
          200: '#EBCBBE',
          300: '#E1B09C',
          400: '#D89679',
          500: '#CE7B57', // Main brand color
          600: '#B06544',
          700: '#914F32',
          800: '#733920',
          900: '#54230D',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F2EFE9', // Main background
          200: '#EAE5DB',
          300: '#E1DBCD',
          400: '#D9D0C0',
          500: '#D1C6B2',
        },
        earth: {
          800: '#3A2E2A',
          900: '#261D1A', // Dark text / accents
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
        'float': '0 20px 40px -10px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
}
