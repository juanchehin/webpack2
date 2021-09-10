const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/ // Solo se aplicara babel a los archivos .js
            },
            {
                // use: ['style-loader', 'css-loader'], // Se carga de dereha a izquierda
                rules: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[hash:base64:5]',
                        },
                    },
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: { limit: 40000 } // Maximo tamaño de la imagen de 40000 Bytes
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.css'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }, ],
    }
};

module.exports = config;