//require the methods exported from orm constructor object
var orm = require("../config/orm.js");

var burger = {
  //from burgers table get a response of all the data
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
      // use burgers table burger_name column and add it to the not devoured list
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  
  update: function(id, cb) {
    //to update devoured pass the id of that devoured and pass that value to devored list
    var condition = "id=" + id;
    orm.update("burgers", { devoured: true }, condition, cb);
  }
};
//export burgers constructor
module.exports = burger;
