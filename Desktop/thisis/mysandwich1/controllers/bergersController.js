var express = require("express");
var router = express.Router();
var burger = require("../model/berger.js");

// use express for the / route response  run the /burgers route 
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

//use /burgers route to render all the data from mysql to index using hundlebars
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// use the /burgers/create route to get the data submited from inputs in the browser and post it to the mysql and also redirect to the browser too
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {  
      res.redirect("/");
  });
});

// put route -> back to index
// wrapper for orm.js that using MySQL update callback will return a log to console,
// render back to index with handle
// Send back response and let page reload from .then in Ajax
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) { 
    //console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
