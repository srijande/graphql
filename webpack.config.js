const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.resolve('./src/index.js')],
  output: {
    path: path.resolve('./dist'),
    filename: 'graphql.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'GraphQL',
    favicon: path.resolve('./src/favicon.ico')
  })]
}
