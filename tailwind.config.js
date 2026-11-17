/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f6f4',
          100: '#e5ebe5',
          200: '#cbd8cb',
          300: '#a6beaa',
          600: '#436146',
          700: '#344e37',
          800: '#2a3e2c',
          900: '#233325',
        },
        gold: {
          300: '#e7cc87',
          400: '#d9b665',
          500: '#c29744',
          600: '#a37c31',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf8f2',
          200: '#f4efe4',
          300: '#eae2ce',
        },
        wood: {
          400: '#a17852',
          500: '#875d38',
          600: '#714c2b',
          700: '#5c3d21',
          800: '#462e18',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        devanagari: ['var(--font-noto-serif-devanagari)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

