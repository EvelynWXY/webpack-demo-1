const HtmlWebpackPlugin = require("html-webpack-plugin");
const { options } = require("less");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const base = require("./webpack.config.base.js"); //引入base共有属性

module.exports = {
  ...base,
  mode: "production",
  //mode:"production" 给用户用的没有任何注释，代码最小化
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      //用来提取css的插件
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, //正则表达式,如果发现了任何以.css结尾的文件名
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
