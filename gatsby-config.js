module.exports = {
  siteMetadata: {
    title: 'Spencer Coleman',
    description:
      'Spencer Coleman is a web developer and product manager on a mission to build delightful, user-friendly applications.',
    siteUrl: 'https://www.spencercoleman.dev', 
    image: '/image.png',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SpencerColeman',
        short_name: 'SpencerColeman',
        start_url: '/',
        background_color: '#F7F2E7',
        theme_color: '#F7F2E7',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
}