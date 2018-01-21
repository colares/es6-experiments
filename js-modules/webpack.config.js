const webpack = require('webpack')

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
    }
}