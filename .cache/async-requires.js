// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-style-sample-js": () => import("/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/src/pages/style-sample.js" /* webpackChunkName: "component---src-pages-style-sample-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/luke/Sites/Misc/gatsby-tailwind-boilerplate/.cache/data.json")

