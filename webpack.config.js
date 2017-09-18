var path = require('path');

module.exports = {

    entry : './index.js',
    output : {
        path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    devServer : {
        contentBase : path.join(__dirname ,'/'),
        port : 7008
    },
    module : {
        loaders : [
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test : /\.css/,
                use: ["style-loader","css-loader"]
            }
        ]
    }

}