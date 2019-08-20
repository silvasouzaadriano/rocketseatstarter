module.exports = {
  entry: ['@babel/polyfill', './desafios_es6_async_await_axios/main.js'],
  output: {
    path: __dirname + '/desafios_es6_async_await_axios',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/desafios_es6_async_await_axios'
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