const path = require("path"); 
 
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
     
    mode : "development",
    entry  :  "./App.jsx",
    output : {
        path: path.resolve(__dirname,"dist","js"),
        filename: 'bundle.js',
        
    },
    watch : true , 
    
    module : {
        rules : [{
            test : /\.jsx?/,
            exclude : /node_modules/,
            use : "babel-loader"

        }
        ,{
            test : /\.css$/, 
            use : ["style-loader","css-loader"]
        }],
        
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      },
    resolve :  {
        extensions : [".js",".jsx"], 
    },
    devtool : "eval",
    plugins : [new HtmlWebpackPlugin({
        title : "test app",
        template : path.join("system","index.html")
    })
    
    ]
    
}