const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'imagenes/'
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
  ]
};
