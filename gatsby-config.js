module.exports = {
  siteMetadata: {
    title: `Tango Brand Alliance`,
    description: `Tango Brand Alliance Website`,
    author: `@locaulker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes: ['/wp/v2/users/**', '/wp/v2/settings*', '/wp/v2/themes*'],
        baseUrl: "tango-data.test",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://tango-data.test",
          replacementUrl: "",
        },
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Teko`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
