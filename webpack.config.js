const skeleton = require('./webpack-skeleton')

var config = Object.assign({}, skeleton, {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.styl?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    libraryTarget: 'commonjs2',
    publicPath: 'http://localhost:8080/assets/'
  },
  debug: true,
  devtool: 'eval-source-map'
})

module.exports = config
