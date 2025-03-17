/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      // Make React available globally (no need to import in every file)
      react: path.resolve("./node_modules/react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            use: [
              {
                loader: "@svgr/webpack",
                options: {
                  svgoConfig: {
                    plugins: [
                      {
                        name: "preset-default",
                        params: {
                          overrides: {
                            removeViewBox: false,
                          },
                        },
                      },
                    ],
                  },
                  titleProp: true,
                  exportType: "named",
                },
              },
              "url-loader",
            ],
          },
          {
            type: "asset/resource",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Load environment variables but don't inject them directly into the bundle
    new Dotenv({
      path: "./.env", // Path to your .env file
      systemvars: true, // Load system environment variables as well
      safe: true, // Only use variables in .env.example to avoid leaking secrets
    }),
    // Only expose safe environment variables to the frontend
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: false,
  },
};
