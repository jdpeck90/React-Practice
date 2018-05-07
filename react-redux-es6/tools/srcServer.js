import express from 'express'; // server module
import webpack from 'webpack'; 
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000; //port the app will run on
const app = express(); //call instance of express
const compiler = webpack(config); //calling config of webpack which we defined in webpack

app.use(require('webpack-dev-middleware')(compiler, { //pass webpack into express
  noInfo: true, // we don't want information on the command line
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) { //telling webpack which files we want it to serve
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) { //telling webpack where we want this app to run
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`); //local host 3000
  }
});