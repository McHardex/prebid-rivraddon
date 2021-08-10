const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "riveraddon.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "rivraddon.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
    mainFields: ["loader", "main"]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
  })],
}