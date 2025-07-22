/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
        Cairo: ['"Cairo"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-dlig': {
          fontFeatureSettings: "'dlig' on",
        },
      });
    },
  ],
}