const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const marked = require("marked");

const renderer = new marked.Renderer();

const fs = require("fs");

module.exports = {
  context: path.join(__dirname, "src"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  entry: {
    app: "./index.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ["file-loader"] },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([ { from: './images', to: "images" } ])
  ],
};
