var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  babel: {
    presets: ["react", "es2015"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'videojs': 'video.js'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.eot$/,
        loader: 'url'
      }
    ]
  }
};
