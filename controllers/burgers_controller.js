// this file creates an instance of the express router


// sets the router to listen for various http verbs


// router.post
// router.get
// router.put
// router.delete
// module.exports = router;

var express = require('express');
var router = express.Router();
//import model(burger.js) to use its database functions
var burger = require("../models/burger.js");

  //create all routes and set up logic within these routes were required
  router.get("/", function(req,res){
        burger.all(function(data){
            
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
       });
  });


  router.post("/", function(req,res){
        console.log(req.body);
         var columns = 'burger_name, devoured';
        // what did the user enter for each field?
        var burgerName = req.body.new_burger;
        var devoured = false;
        var values = [burgerName, devoured];
        burger.create(columns, values, function(data){
      
            res.redirect("/");      
        });
  });

  router.put("/:id", function(req,res){
        var condition = 'id = ' + req.params.id;
        var keyVals = {
            devoured: true
        };
        console.log("condition", condition);

        burger.update(keyVals, condition, function(){
      
            res.redirect("/");      
        });
  });

  
  module.exports = router;
