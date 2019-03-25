module.exports = {
  siteMetadata: {
    title: `Mid Coast Plunge Pools`,
    description: `Servicing Port Macquarie and the Mid North Coast, Mid Coast Plunge Pools help you make your dream of owning a pool a reality! Call today for a free quote.`,
    siteUrl: `https://www.midcoastplungepools.com.au`,
    author: `Justin Robinson`,
    phone: `0402148861`,
    phone_formatted: `0402 148 861`,
    email: `info@midcoastplungepools.com.au`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-136944137-1`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.midcoastplungepools.com.au`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mid Coast Plunge Pools`,
        short_name: `MCPP`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#090C96`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`], // Purge only tailwind
      },
    },
  ],
};
