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
        maroon: {
          primary: '#6B2D35',
          dark: '#5A252C',
          muted: '#8C6068',
          rose: '#8C6068',
          light: '#A7757E',
          soft: '#E8D5D8',
          bg: '#6B2D35',
          border: 'rgba(140, 96, 104, 0.25)',
          50: '#FBF7F7',
          100: '#F5ECEE',
          200: '#EBD7DA',
          300: '#DAB8BE',
          400: '#C28F97',
          500: '#8C6068',
          600: '#6B2D35',
          700: '#5A252C',
          800: '#471B21',
          900: '#381419',
        },
        cream: {
          DEFAULT: '#F5EEE6',
          page: '#F5EEE6',
          button: '#FFF8EC',
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F5EEE6',
          300: '#ECE1D4',
          400: '#DFCDBB',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'EB Garamond', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'Playball', 'Great Vibes', 'Pinyon Script', 'cursive'],
        devanagari: ['var(--font-noto-serif-devanagari)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

