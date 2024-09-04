const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',       // Entry point of your application
  output: {
    filename: 'main.js',         // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development',   
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
    }),
  ],      
};
