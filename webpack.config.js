const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//node environment that stores the current env you are in
// it will bet set to production by heroku
// process.env.NODE_ENV

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({
    path: ".env.test"
  });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: ".env.development"
  });
}


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
      new ExtractTextPlugin("styles.css"),
      // to pass node global data to client JS files
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        "process.env.FIREBASE_PRODUCT_ID": JSON.stringify(process.env.FIREBASE_PRODUCT_ID),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        "process.env.FIREBASE_MESSAGING_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_ID)
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      // fallback to /index.html
      historyApiFallback: true,
      publicPath: "/dist/" // required for webpack dev server. By default the publicPath is "/"
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