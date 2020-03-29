module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
           { test: /\.svg$/, use: 'svg-inline-loader' },
           { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }, 
           { test: /\.(js)$/, use: 'babel-laoder' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }
}