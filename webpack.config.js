const HtmlWebpackPlugin = require("html-webpack-plugin");
const { options } = require("less");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  mode: "development",
  //mode:"production" 给用户用的没有任何注释，代码最小化
  module: {
    rules: [
      {
        test: /\.css$/i, //正则表达式,如果发现了任何以.css结尾的文件名
        use: ["style-loader", "css-loader"], //那么就用 css-loader 去处理这个文件，css-loader会把文件内容读到js里，style-loader 是把css-loader读到的东西变成一个style标签放到head里
      },
    ],
  },
};
