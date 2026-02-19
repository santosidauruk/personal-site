require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Santo Sidauruk`,
    siteTitleAlt: `Santo Sidauruk`,
    siteDescription: `A frontend developer. Love to build beautiful platform`,
    siteHeadline: `Blog by Santo Sidauruk`,
    author: `Santo Sidauruk`,
    siteUrl: `https://santosidauruk.com`,
    siteLanguage: `en`,
     // Used for og:image and must be placed inside the `static` folder
     siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/santo-sidauruk/`,
          },
          {
            name: 'Github',
            url: 'https://github.com/santosidauruk'
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `santo-sidauruk-blog`,
        short_name: `santo-sidauruk-blog`,
        description: `A frontend developer. Love to build beautiful platform`,
        start_url: `/`,
        background_color: `#1f2028`,
        theme_color: `#ffd644`,
        display: `standalone`,
        icons: [
          {
              src: `/favicon-32x32`,
              sizes: `32x32`,
              type: `image/png`,
          },
          {
              src: `/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
          },
          {
              src: `/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`
  ].filter(Boolean),
}
