'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.PORT || 8080;
let cookieSession = require("cookie-session");
let cookieParser = require("cookie-parser");
var favicon = require('serve-favicon');
let serveStatic = require("serve-static");

let cookie = require("./utils/cookie.js");

let { setupDataLayer } = require("./service/DataLayer");

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Add cookies to responses
app.use(cookieParser());
app.use(cookieSession({ name: "session", keys: ["bookey1", "bookey2"] }));

app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')))

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());


  /**
   * catch the path for the swaggerui and redirect to the docs
   */
  app.use(function (req, res, next) {
    if(req.url === "/backend/swaggerui") {
      let swaggerUIDocsUrl = "/docs"
      res.writeHead(301, {Location: swaggerUIDocsUrl});
      res.end();
    } else
      next()
  })


  app.use(serveStatic(__dirname + "/public"));

  /**
   * If every other request failed to manage the page, give page 404
   */
  app.use(function (req, res, next) {
      res.writeHead(301, {Location: "/404.html"});
      res.end();
  })

  setupDataLayer().then(() => {
    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  });
});
