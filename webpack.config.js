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
    },
    resolve: {
      root: __dirname,
      alias: {
        Comment: 'app/js/components/comment.jsx',
        AddComment: 'app/js/components/addcomment.jsx',
        MainApp: 'app/js/components/app.jsx',
        CommentList: 'app/js/components/commentlist.jsx',
        commentApi: 'app/js/data/commentApi.js'
      },
      extenstions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map'
}
