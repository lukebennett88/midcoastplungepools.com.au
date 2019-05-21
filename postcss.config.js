const autoprefixer = require('autoprefixer');
const postcssEasingGradients = require('postcss-easing-gradients');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    postcssEasingGradients,
    autoprefixer,
  ],
};
