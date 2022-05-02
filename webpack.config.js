const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  //mode:"production" 给用户用的没有任何注释，代码最小化
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
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
  module: {
    rules: [
      {
        test: /\.css$/i, //正则表达式,如果发现了任何以.css结尾的文件名
        use: ["style-loader", "css-loader"], //那么就用 css-loader 去处理这个文件，css-loader会把文件内容读到js里，style-loader 是把css-loader读到的东西变成一个style标签放到head里
      },
    ],
  },
};
