const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //默认入口
  output: {
    filename: "index.[contenthash].js", //dist文件中转译生成的文件名称
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XDML - 写代码啦",
      template: "src/assets/index.html",
    }),
  ],
};
