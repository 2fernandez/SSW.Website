require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'SSW Website',
    },
    plugins: [
        {
            resolve: `gatsby-source-git`,
            options: {
                name: 'content',
                remote: process.env.CONTENT_REPO,
                branch: process.env.CONTENT_BRANCH,
                patterns: ['**/*.mdx', '**/*.png', '**/*.jpeg'],
            },
        },
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-WP8CQLL',
                includeInDevelopment: true,
            },
        },
    ],
};
