const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Your entry point (adjust the path if needed)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'production', // Set mode to production
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html',}), // Add this line
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({minimizer: [{implementation: require('imagemin-mozjpeg'),},],
      }),
    ],
  },
};
