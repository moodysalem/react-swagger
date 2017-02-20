/**
 * Shared configuration
 */
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  gitRevisionPlugin = new (require('git-revision-webpack-plugin'))();

module.exports = {
  entry: [ 'whatwg-fetch', './src/index.jsx' ],

  output: {
    path: 'dist',
    filename: '[hash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.template.html'
    }),
    new webpack.ProvidePlugin({
      Promise: 'bluebird'
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(gitRevisionPlugin.version())
    })
  ],

  module: {
    rules: [
      {
        use: [
          'babel-loader'
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/
      }
    ]
  },

  devServer: {
    historyApiFallback: true,

    host: '0.0.0.0',
    port: 3000
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  externals: [
    {
      'underscore': '_',
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  ]
};