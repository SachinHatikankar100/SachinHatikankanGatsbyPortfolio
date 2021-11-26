module.exports = {
  siteMetadata: {
    title: "Sachin Hatikankan Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `C:\Users\Sachin\Gatsby\SachinHatikankanGatsbyPortfolio/blog`,
      }
    },
  ],
};