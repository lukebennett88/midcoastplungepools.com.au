const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/index.js"))),
  "component---src-pages-style-sample-js": hot(preferDefault(require("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/style-sample.js")))
}

