var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Posee las librerias que voy a actualizar con baja frecuencia
const VENDOR_LIBS = [
    "faker",
    "lodash",
    "react",
    "react-dom",
    "react-input-range",
    "react-redux",
    "react-router",
    "redux",
    "redux-form",
    "redux-thunk"
]

module.exports = {
    entry: {
        bundle: './src/index.js', // Posee JS de nuestra app principal
        vendor: VENDOR_LIBS // Posee las dependecias de nuestro proyecto
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunk].js'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};