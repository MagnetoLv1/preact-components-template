const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/dev",
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3030,
        open: true,
        inline: true,
    },
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
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: [".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            templateContent: `
			  <html>
				<body>
					<div id="root"></div>
				</body>
			  </html>
			`,
        }),
    ],
};
