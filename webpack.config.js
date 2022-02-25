const WrapperPlugin = require('wrapper-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  plugins :[
    new WrapperPlugin({
      test: /\.js$/,
      footer: 'export default Delimiter;',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [ '@babel/preset-env' ],
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    library: 'Delimiter',
    libraryTarget: 'umd'
  }
};
