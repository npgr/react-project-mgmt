var api = require('raml-mocker-server');
var { formats } = require('./formats');

const apiPrefix = '/api';
const port = 3031;

var options = {
  path: 'rest-definitions', // path to folder with RAML files
  port,
  prefix: apiPrefix,
  watch: true,
  debug: true,
  formats
};

function logApiCall(req) {
  console.log(req.method, req.url);
}

var callback = function (app) {
  // Express app could be used to configure more paths
  //console.log('All RAML files parsed and API endpoints defined');
  /* console.log("=====================")
    console.log("Custom End Points")
    console.log("post /proyecto")
    console.log("post /proyecto/filtro")
    console.log("=====================")*/
  console.log(`** Api prefix = ${apiPrefix}`);

  /* app.post(`${apiPrefix}/proyecto`, (req, res) => {
        res.json({ respuesta: "Exito" });
        logApiCall(req);
    });

    app.post(`${apiPrefix}/proyecto/filtro`, (req, res) => {
        res.json(filtroProyecto);
        logApiCall(req);
    });*/

  app.use(function (req, res, next) {
    console.log('*** Unknown URL: ', req.method, req.url);
    return next();
  });
};

// returns created server
var server = api(options, callback);
