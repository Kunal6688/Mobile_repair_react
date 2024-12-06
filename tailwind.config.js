/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { button: '#52AB98', // Example color 
        text: '#2b6777', // Example color 
        accent: '#38b2ac', // Example color
      },
      boxShadow: { 'allShadow': '0 2px 12px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08)'},
    },
  },
  plugins: [],
}

