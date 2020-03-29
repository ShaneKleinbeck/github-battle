module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
           { test: /\.svg$/, use: 'svg-inline-loader' } 
        ]
    }
}