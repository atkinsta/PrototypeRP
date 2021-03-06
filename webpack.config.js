const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

let NODE_ENV = 'production';
if (process.env.NODE_ENV) {
    NODE_ENV = process.env.NODE_ENV.replace(/^\s+|\s+$/g, "")
}

module.exports = {
    entry: {
        index: './reactUI/index.js',
        app: './reactUI/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'client_packages/prototype'),
        filename: '[name].js'
    },
    watch: NODE_ENV === 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    optimization: {
        minimize: true
    },
    mode: NODE_ENV,
    plugins: [
        new webpack.EnvironmentPlugin('NODE_ENV'),
        new CopyPlugin([
            {from: "reactUI/index.html", to: "."},
            {from: "reactUI/configs/", to: "configs/"},
            {from: "reactUI/main/", to: "main/"},
            {from: "reactUI/assets", to: "assets/"}
        ])
    ]
};
