const path = require('path');
//webpack is an object
module.exports = {
  entry: './client/index.jsx',
  //this proj is dev:
  // mode: 'development',
  //where to put stuff after its transpiled:
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //what we can do to tell webpack what to do:
  module: {
    //rules we want to follow:
    rules: [
      {
        //look at all jsx files:
        test: /\.jsx?$/,
        //don't add node_modules to file
        exclude: /(node_modules)/,
        //how to do this work:
        use: {
          //what transpiles languages:
          loader: 'babel-loader',
          //this babel loader, use these specific presets:
          // options: {
          //   presets: ['@babel/preset-react', '@babel/preset-env'],
          // },
        },
      },
      //how do we handle css files:
      {
        test: /\.css$/,
        //use style-loader/css-loader to handle css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  //anything that would have .js/.jsx, you can leave it off??? to look up
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
