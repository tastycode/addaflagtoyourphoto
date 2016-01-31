var path = require('path');
var webpack = require('webpack');

var paths = {
  dist: 'dist',
  srcJsx: './src/app.js'
}

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {
  devtool: 'eval',
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=10000',
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader',
    },
    {
      test: /\.json$/,
      loaders: ['json']
    },
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules/react-routing/src')
      ]
    },
    {
      test: /\.css$/,
      loaders: ['style-loader/useable?modules&localIdentName=', 'css', 'postcss'],
      include: path.join(__dirname, 'src')
    }]
  },
  postcss: function plugins() {
    return [
      require('postcss-import')({
        onImport: files => files.forEach(this.addDependency),
      }),
      require('postcss-mixins')(),
      require('postcss-nested')(),
      require('postcss-cssnext')({ autoprefixer: AUTOPREFIXER_BROWSERS }),
    ];
  },

};
