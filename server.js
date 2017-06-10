
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var exphbs = require("express-handlebars");
// you probably won't need this, bring it back if you do
// var methodOverride = require("method-override");
var app = express();
var port = 3000;  //8080

 

//serve static content for the app from the "public" directory in the app directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


 app.use(methodOverride("_method"));

 
 
 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");
 

 // Import routes and give the server access to them.
 require('./routes/api-routes.js')(app); 
 require('./routes/html-routes.js')(app);
 //var routes = require("./controllers/burgers_controller.js");
 //app.use("/",routes);
 
 app.listen(port, function() {
   console.log("Listening on port %s", port);
 });

