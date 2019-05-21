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

/*/
assign a value for the cookie if the session is new
//*/
app.use(function(req,res,next) {

  if(!req.session[cookie.name]) {
    console.log("new session, set up cookie: ")
    let randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    req.session[cookie.name] = randomNumber;
    console.log("new session, set up cookie: " + randomNumber)
  }
  next();
})

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

  /*/
  app.use(function (req, res, next) {
    //console.log(req.getHeader('set-cookie'));
    res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
  })
  //*/

  /*/Cookie function
  app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.session.cookie;
    console.log(req.session);
    console.log(res);
    if (cookie === undefined)
    {
      // no: set a new cookie
      var randomNumber=Math.random().toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      res.cookies[cookies.length] = ('cookieName123',randomNumber, { maxAge: 900000, httpOnly: true });
      console.log('cookie created successfully');
    } 
    else
    {
      // yes, cookie was already present 
      console.log('cookie exists', cookie);
    } 
    next(); // <-- important!
    })
  //*/

  app.use(serveStatic(__dirname + "/public"));


  setupDataLayer().then(() => {
    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  });
});
