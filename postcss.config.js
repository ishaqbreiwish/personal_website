const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./src/css/tailwind.config.js');

module.exports = {
  plugins: [
    tailwindcss(tailwindConfig),
    autoprefixer,
  ],
};
