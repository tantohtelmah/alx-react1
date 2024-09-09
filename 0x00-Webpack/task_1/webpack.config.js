const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Your entry point (adjust the path if needed)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'production', // Set mode to production
};
