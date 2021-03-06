module.exports = {
  proxy: {
    prefix: "/data",
    url: "https://elect.thematter.co",
  },

  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Libre Baskerville:400,400i,700",
            "Noto Sans:400,700",
            "Bai Jamjuree:400,600",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/PageLayout`),
      },
    },

    // @todo #1 Add Analytics, e.g. Google Analytics.
    //  Check out Gatsby docs for how to add analytics
    //  - Main Guide: https://www.gatsbyjs.org/docs/adding-analytics/
    //  - Google Analytics: https://www.gatsbyjs.org/docs/adding-analytics/#using-gatsby-plugin-google-analytics
    //  - Google Tag Manager: https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43653558-20",
      },
    },
    // facebook - pixel
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "403066120477972",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ELECT LIVE",
        short_name: "ELECT LIVE",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        display: "standalone",
        icon: "src/styles/images/site-logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        custom: `
<IfModule mod_headers.c>
    <FilesMatch "\\.info\\.json$">
        Header set Cache-Control "public, max-age=30, stale-while-revalidate=30, stale-if-error=300, must-revalidate"
    </FilesMatch>
</IfModule>
        `,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
    },
  ],
}
