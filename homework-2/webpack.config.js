const HtmlWebpackPlugin= require('html-webpack-plugin')
const path= require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports={
    mode: 'development',
    entry: path.resolve(__dirname,'src','index.js'),
    output:{
        filename:'main.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'index.html')
        }),
        
		new BundleAnalyzerPlugin(),
    ],
    module:{
        rules:[
            {
                test: /\.mp3$/,
                use:['file-loader']
            }
        ]
    }
}