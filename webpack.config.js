module.exports = {
    entry: ['./app/index.js'],
    output:{
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    resolve: {
      root: __dirname,
      alias: {
        MainApp: 'app/js/app.jsx',
        Comment: 'app/js/components/comment.jsx',
        AddComment: 'app/js/components/addcomment.jsx',
        CommentBox: 'app/js/components/commentbox.jsx',
        CommentList: 'app/js/components/commentlist.jsx',
        Navigation: 'app/js/components/navigation.jsx',
        NotFound: 'app/js/components/notfound.jsx',
        commentApi: 'app/js/data/commentApi.js'

      },
      extenstions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map'
}
