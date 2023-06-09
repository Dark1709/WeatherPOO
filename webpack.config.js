const path = require("path");
const HtmlWEbpackPlugin =require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output : {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    devServer:{
        port: 3000
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use:[ 'style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWEbpackPlugin({
            template: './index.html'
        })
    ]
    

}