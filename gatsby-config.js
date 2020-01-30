module.exports = {
  siteMetadata: {
    title: `Electric Lunch Lady Land`,
    description: `Electric Lunch Lady Land - More porfitable restaurants through targeted technology.`,
    author: `@ChefWill15`,
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
        name: `ElectricLunchLadyLand.com`,
        short_name: `EL3.com`,
        start_url: `/`,
        background_color: `#707070`,
        theme_color: `#707070`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`],
}
