const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src"
  },
  output: {
    filename: 'public/client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.csv$/,
        use: {
          loader: 'csv-loader',
          options: {
            header: true,
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "es2015",
              "react"
            ],
            "plugins": [
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-function-bind",
              "transform-object-rest-spread"
            ],
            babelrc: false
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "[name].css", allChunks: true})
  ],
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  devtool: 'inline-source-map'
}