module.exports = {
  entry: './desafios_es6_webpack/main.js',
  output: {
    path: __dirname + '/desafios_es6_webpack',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}