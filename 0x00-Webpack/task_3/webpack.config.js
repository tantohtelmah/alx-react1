const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const webpackConfig = {devtool: 'inline-source-map',};
const path = require('path');

module.exports = {
  mode: 'development', // Set mode to production
  entry: {
      header: './modules/header.js',
      boby: './modules/boby.js',
      footer: './modules/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8564, // Set the port to 8564
    static: {
        directory: path.join(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html',}), // Add this line
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({minimizer: [{implementation: require('imagemin-mozjpeg'),},],
      }),
    ],
  },
},
};
