
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// you probably won't need this, bring it back if you do
// var methodOverride = require("method-override");

var port = 3000;  //8080

var app = express(); 

// somewhere in this general region:
// set up your express configs
// app.use(someMiddleware());


// create a main router file (burgerController.js)
// require your router

// start app listening on your port^

//serve static content for the app from the "public" directory in the app directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


 app.use(methodOverride("_method"));

 
 var exphbs = require("express-handlebars");
 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");
 

 // Import routes and give the server access to them.
 var routes = require("./controllers/burgers_controller.js");
 app.use("/", routes);
 
 app.listen(port, function() {
   console.log("Listening on port %s", port);
 });

