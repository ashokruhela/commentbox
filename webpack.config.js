module.exports = {
    entry: ['./app/index.js'],
    output:{
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}