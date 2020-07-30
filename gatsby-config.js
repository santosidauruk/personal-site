require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Santo Sidauruk`,
    description: `A software developer who loves to build beautiful platform`,
    author: `Santo Sidauruk`,
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
        name: `santo sidauruk`,
        short_name: `santo sidauruk`,
        start_url: `/`,
        background_color: `#faffed8c`,
        theme_color: `#faffed8c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
