module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.png$/,
                loader: "file-loader",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ],
    },

    devServer: {
        compress: true,
        port: 8080,
    },
}

