require(`dotenv`).config({
    path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // Of course you can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
        siteTitleAlt: `Ensar Eray Akkaya - Portfolio`,
        siteTitle: `Ensar Eray Akkaya - Portfolio`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-cara`,
            // See the theme's README for all available options
            options: {},
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ensar Eray Akkaya`,
                short_name: `EEA`,
                description: `Ensar Eray Akkaya - Porfolio`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [
                    {
                        src: `project-name\static\apple-icon-180x180.png`,
                        sizes: `180x180`,
                        type: `image/png`,
                    },
                    {
                        src: `project-name\static\apple-icon-180x180.png`,
                        sizes: `180x180`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
};
