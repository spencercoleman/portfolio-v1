module.exports = {
  siteMetadata: {
    title: 'Spencer Coleman',
    description:
      '',
    siteUrl: 'https://www.spencercoleman.dev', 
    image: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,  
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `works`,
        path: `${__dirname}/content/works`,
      }
    },
  ],
}