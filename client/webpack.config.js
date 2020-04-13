const path = require("path");
const WEBPACK = require('webpack');

module.exports = {

    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        
        rules: [{
            test: /\.js$/,
            use: "babel-loader"
        },
        
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        {
                     test: /\.(png|svg|jpg|jpeg|gif)$/,
                     use: [
                       'file-loader',
                     ],
                  },
    ]
    },
    output: {
        filename: "bundle.js"
    }
}