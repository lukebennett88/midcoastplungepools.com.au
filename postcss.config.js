const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-easing-gradients'),
    require('autoprefixer'),
  ],
};
