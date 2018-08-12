const path = require('path');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.(css|scss|sass)$/,
    exclude: /node_modules/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, './../postcss/postcss.config.js')
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, './../../src/assets/styles')
          ]
        }
      },
    ],
  },
  {
    test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
    loader: 'url-loader?limit=8000',
  },
];
