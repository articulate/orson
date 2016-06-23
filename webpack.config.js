var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
}
