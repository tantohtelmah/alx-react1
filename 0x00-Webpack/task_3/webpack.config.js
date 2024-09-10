const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to development
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js', // Name the output file bundle.js
    path: path.resolve(__dirname, 'public'), // Output to the public folder
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your existing index.html as a template
      filename: 'index.html', // Output file name
      inject: 'body', // Inject all assets into the body
      chunks: ['header', 'body', 'footer'],
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 8564, // Set the port to 8564
    open: true, // Automatically open the browser
  },
  stats: {
    errorDetails: true,
  },
  performance: {
    maxAssetSize: 1000000, // Set asset size limit to avoid warnings
  },
};
