var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.base.config.js');

const entrys = {
  'index': '起始页面',
  'java': 'Java工具',
  'java/pojo': 'Java贫血POJO类生成工具',
};
const list = Object.keys(entrys);
for (let key of list) {
  config.entry[key] = "./src/entry/" + key + ".entry.js",
    config.plugins.push(new HtmlWebpackPlugin({
      title: entrys[key],
      filename: key + '.html',
      template: './src/template.html',
      chunks: ['vendor', 'runtime', key]
    }));
}
module.exports = config;
