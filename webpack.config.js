var path = require("path");
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration')).development();

module.exports = [{
  context: path.join(__dirname, "public", "javascripts"),
  entry: "app",
  output: {
    path: path.join(__dirname, "public", "javascripts"),
    publicPath: "/img/"  
    filename: "bundle.js"
  },
  module: {
    loaders: [
        {
        test: webpack_isomorphic_tools_plugin.regular_expression('images'),
        loader: 'url-loader?limit=10240',
        }
        
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  },
    plugins:
        [
            // extracts common javascript into a separate file
            new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].js'),

            // // Assign the module and chunk ids by occurrence count. 
            // // Ids that are used often get lower (shorter) ids. 
            // // This make ids predictable, reduces to total file size and is recommended.
            // new webpack.optimize.OccurenceOrderPlugin(true)
        ]    
    
}];