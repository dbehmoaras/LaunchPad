const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.resolve(__dirname,'./client/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      }
    ]
  },
  devServer: {
    publicPath: '/build', //the default port is 8080, the default webpack dev server, load static files
    proxy: {
      '/api/leaders': 'http://localhost:3000' //connects to the proxy server, in server.js. how we connect to node. points to the /api/leaders route in server.js
    }
  }
}