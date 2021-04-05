const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: ["./src/index"],
    output: {
        libraryTarget: "var",
        library: "renderComponent",
        libraryExport: "default",
        path: path.resolve(__dirname, "build"),
        filename: "preact-components-template.js",
        clean: true, // Clean the output directory before emit.
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: [".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
    target: ["web", "es5"], // include this!!
    module: {
        rules: [
            {
                test: /\.(js|tsx?)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-typescript", { jsxPragma: "h" }], "preact"],
                        plugins: [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                            "@babel/plugin-transform-arrow-functions",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
        }),
    ],
};
