/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Or 'class' for class-based toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

