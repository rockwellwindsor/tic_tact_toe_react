var webpack = require("webpack");

var config = {

   // Set entry point (source file).
   entry: './main.js',
   
   // Set root path.
   output: {
      path:'/',
      filename: 'index.js',
   },
    
   // Setting the server port number
   devServer: {
      inline: true,
      port: 8080
   },

   // Set Babel loaders
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;