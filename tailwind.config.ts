/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-blue', 'text-mint', 'bg-blue', 'bg-mint'],
  theme: {
    extend: {
      colors: {
        blue: '#00a0f0',
        mint: '#5fbebe',
        'dark-blue': '#003c7d',
        grey: '#d9dee8',
        'light-grey': '#f8f8f8',
      },
    },
  },
  plugins: [],
};
