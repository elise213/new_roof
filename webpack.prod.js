const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/",
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
      silent: true, // Suppresses errors for missing env variables
      defaults: true, // Uses .env.example if available
    }),
  ],
});
