/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './node_modules/preline/preline.js',
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1280px",
        },
        maxWidth: {
          DEFAULT: "max-w-xl",
        },
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
};

