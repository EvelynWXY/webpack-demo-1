const path = require("path");

module.exports = {
  mode: "development",
  //mode:"production" 给用户用的没有任何注释，代码最小化
  entry: "./src/index.js", //默认入口
  output: {
    filename: "[name].[contenthash].js", //dist文件中转译生成的文件名称
  },
};
