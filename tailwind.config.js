module.exports = {
    content: [
        './public/*.html',
        './app/helpers/**/*.rb',
        './app/javascript/**/*.js',
        './app/javascript/**/*.jsx',
        './app/views/**/*.{erb,haml,html,slim}',
        './app/assets/stylesheets/**/*.{css,scss}'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}