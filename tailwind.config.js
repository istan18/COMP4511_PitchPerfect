/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        backgroundGreen: '#171F20',
        textGray: '#ABABAB',
      },
    },
  },
  plugins: [],
};
