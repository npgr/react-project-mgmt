var api = require('raml-mocker-server');
var express = require('express');
var app = express();
var formats = require('./formats');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:3030');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const apiPrefix = '/services/rest';

var options = {
  app: app,
  path: 'rest-definitions', // path to folder with RAML files
  port: 3031,
  prefix: apiPrefix,
  watch: true,
  debug: true,
  formats
};
/* var cb = function(){
	console.log('callback, stop the server');
	watcher.close();
	server.close();
};*/

var cb = function (app) {
  // Express app could be used to configure more paths
  console.log(`** Api prefix = ${apiPrefix}`);

  app.use(function (req, res, next) {
    console.log('*** Unknown URL: ', req.method, req.url);
    return next();
  });
};

var watcher = api(options, cb);

const port = 3031;
console.log(`Listening on port ${port}`);
var server = app.listen(port);
