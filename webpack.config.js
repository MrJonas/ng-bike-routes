const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const browserConfig = {
    entry: "./src/browser/index.js",
    output: {
        path: './dist/',
        filename: "bundle.js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=./public/build/[hash].[ext]'
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "dist/media/[name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {importLoaders: 1}
                        },
                        {
                            loader: "postcss-loader",
                            options: {plugins: [autoprefixer()]}
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets'}
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ]
};

const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: "dist-server/server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "dist/media/[name].[ext]",
                    publicPath: url => url.replace(/dist/, ""),
                    emit: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader/locals"
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=./public/build/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = [browserConfig, serverConfig];
