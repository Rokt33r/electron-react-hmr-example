var webpack = require('webpack')
var JsonpTemplatePlugin = webpack.JsonpTemplatePlugin
var FunctionModulePlugin = require('webpack/lib/FunctionModulePlugin')
var NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin')
var ExternalsPlugin = webpack.ExternalsPlugin

var opt = {
  filename: 'bundle.js',
  libraryTarget: 'commonjs2',
  publicPath: 'http://localhost:8080/assets/'
}

var config = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './app/index.js'
  ],
  output: opt,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExternalsPlugin('commonjs', [
      'app',
      'auto-updater',
      'browser-window',
      'content-tracing',
      'dialog',
      'global-shortcut',
      'ipc',
      'menu',
      'menu-item',
      'power-monitor',
      'protocol',
      'tray',
      'remote',
      'web-frame',
      'clipboard',
      'crash-reporter',
      'screen',
      'shell'
    ]),
    new NodeTargetPlugin()
  ],
  externals: [
    // 'socket.io-client',
    // 'md5',
    // 'superagent',
    // 'superagent-promise',
    // 'lodash',
    // 'markdown-it',
    // 'moment'
  ]
}

config.target = function renderer (compiler) {
  compiler.apply(
    new JsonpTemplatePlugin(opt),
    new FunctionModulePlugin(opt)
  )
}

module.exports = config
