var webpack = require('webpack');
var path = require('path');

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
        filename: '[name].js'
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
            name: 'vendor'
        })
    ]
};