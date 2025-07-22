/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
        Cairo: ['"Cairo"', "sans-serif"],
      },
    },
  },
  ".text-style-custom": {
    fontFamily: '"Cairo", sans-serif',
    fontSize: "1rem", // or '16px'
    fontWeight: "600",
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-dlig": {
          fontFeatureSettings: "'dlig' on",
        },
      });
    },
  ],
};
