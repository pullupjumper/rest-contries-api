const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {index: './src/js/index.js', detail: './src/js/detail.js',},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/pages/index.html',
      filename:'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/pages/detail.html',
      filename:'detail.html',

      chunks: ['detail']
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
