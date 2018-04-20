const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, args) => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        /*
         * css-loader : use css in JS
         * style-loader : inject style in DOM
         * sass-loader: import scss file in JS
         * node-sass : transform .scss to .css
         * use : when we have multiple loader
         * */
        /*{
         use: ["style-loader", "css-loader", "sass-loader"],
         test: /\.s?css$/
         }*/
        /*{
         test: /\.s?css$/,
         use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: ["css-loader", "sass-loader"]
         })
         },*/
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      // fallback to /index.html
      historyApiFallback: true,
    }
    /*
     * production: source-map
     * development: eval-source-map, cheap-module-eval-source-map
     * */
  };
};
// loader -> customise behavior of webpack when a file is loaded
// eg: .scss -> .css
// How a files gets transformed. Think of it as webpack plugin that transforms one file
// loaders: think of them as of transformers.