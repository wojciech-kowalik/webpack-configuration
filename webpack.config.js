const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const path = require('path');

module.exports = (env) => {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                title: 'Webpack App',
                header: 'Webpack Title',
                metaDesc: 'Webpack Description',
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            new LinkTypePlugin({
                '**/*.css' : 'text/css'
            }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader',
                ],
              },
            ],
          },
        mode: env,
        output: {
            filename: '[name].bundle.js',
            clean: true
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
            open: true,
            hot: true,
        },
    }
};