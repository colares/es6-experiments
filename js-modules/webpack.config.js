const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

// toda configuração do webpack
// sem virá aqui
module.exports = {
    entry: {
        filename: './app.js'
    },
    output: {
        filename: './build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // all .js files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { // definir o que queremos executar
                    presets: [
                        [
                            'es2015',
                            {modules: false} // trabalhar com o sistema de módulos que já utilizamos atualmente
                        ]
                    ]

                }

            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false, beautify: false},

        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeENV)}
        })
    ]
}